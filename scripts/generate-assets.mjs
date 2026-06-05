import { deflateSync } from 'node:zlib';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const assetDir = join(root, 'public', 'assets');
mkdirSync(assetDir, { recursive: true });

const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n += 1) {
  let c = n;
  for (let k = 0; k < 8; k += 1) {
    c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  crcTable[n] = c >>> 0;
}

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const checksum = Buffer.alloc(4);
  checksum.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])), 0);
  return Buffer.concat([length, typeBuffer, data, checksum]);
}

function png(width, height, rgba) {
  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y += 1) {
    const row = y * (width * 4 + 1);
    raw[row] = 0;
    rgba.copy(raw, row + 1, y * width * 4, (y + 1) * width * 4);
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

function mix(a, b, t) {
  return Math.round(a + (b - a) * t);
}

function makeCanvas(width, height) {
  const pixels = Buffer.alloc(width * height * 4);

  function blendPixel(x, y, color, alpha = 1) {
    const px = Math.round(x);
    const py = Math.round(y);
    if (px < 0 || px >= width || py < 0 || py >= height) return;
    const index = (py * width + px) * 4;
    const a = Math.max(0, Math.min(1, alpha));
    pixels[index] = Math.round(pixels[index] * (1 - a) + color[0] * a);
    pixels[index + 1] = Math.round(pixels[index + 1] * (1 - a) + color[1] * a);
    pixels[index + 2] = Math.round(pixels[index + 2] * (1 - a) + color[2] * a);
    pixels[index + 3] = 255;
  }

  function fillRect(x, y, w, h, color, alpha = 1) {
    for (let yy = Math.max(0, y); yy < Math.min(height, y + h); yy += 1) {
      for (let xx = Math.max(0, x); xx < Math.min(width, x + w); xx += 1) {
        blendPixel(xx, yy, color, alpha);
      }
    }
  }

  function line(x1, y1, x2, y2, color, alpha = 1, thickness = 1) {
    const steps = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
    for (let i = 0; i <= steps; i += 1) {
      const t = i / Math.max(1, steps);
      const x = x1 + (x2 - x1) * t;
      const y = y1 + (y2 - y1) * t;
      for (let ox = -thickness; ox <= thickness; ox += 1) {
        for (let oy = -thickness; oy <= thickness; oy += 1) {
          if (ox * ox + oy * oy <= thickness * thickness) blendPixel(x + ox, y + oy, color, alpha);
        }
      }
    }
  }

  function circle(cx, cy, radius, color, alpha = 1) {
    const r2 = radius * radius;
    for (let y = Math.floor(cy - radius); y <= Math.ceil(cy + radius); y += 1) {
      for (let x = Math.floor(cx - radius); x <= Math.ceil(cx + radius); x += 1) {
        const d2 = (x - cx) ** 2 + (y - cy) ** 2;
        if (d2 <= r2) {
          blendPixel(x, y, color, alpha * (1 - d2 / r2) ** 0.25);
        }
      }
    }
  }

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const tx = x / width;
      const ty = y / height;
      const vignette = Math.min(1, Math.hypot(tx - 0.58, ty - 0.48) * 0.9);
      const glow = Math.max(0, 1 - Math.hypot(tx - 0.72, ty - 0.4) * 2.3);
      const base = [
        mix(7, 13, ty) + glow * 10,
        mix(19, 32, tx) + glow * 28,
        mix(35, 54, 1 - ty) + glow * 34,
      ];
      const darken = 1 - vignette * 0.34;
      const i = (y * width + x) * 4;
      pixels[i] = Math.round(base[0] * darken);
      pixels[i + 1] = Math.round(base[1] * darken);
      pixels[i + 2] = Math.round(base[2] * darken);
      pixels[i + 3] = 255;
    }
  }

  for (let x = 0; x < width; x += 48) line(x, 0, x, height, [255, 255, 255], 0.035, 1);
  for (let y = 0; y < height; y += 48) line(0, y, width, y, [255, 255, 255], 0.032, 1);

  const panels = [
    [width * 0.57, height * 0.22, 270, 116],
    [width * 0.69, height * 0.42, 330, 132],
    [width * 0.5, height * 0.55, 250, 112],
    [width * 0.76, height * 0.66, 260, 96],
  ];

  for (const [x, y, w, h] of panels) {
    fillRect(Math.round(x), Math.round(y), w, h, [255, 255, 255], 0.045);
    line(x, y, x + w, y, [198, 161, 91], 0.36, 1);
    line(x, y + h, x + w, y + h, [54, 184, 200], 0.16, 1);
    line(x, y, x, y + h, [255, 255, 255], 0.08, 1);
    line(x + w, y, x + w, y + h, [255, 255, 255], 0.08, 1);
    for (let i = 0; i < 5; i += 1) {
      const yy = y + 28 + i * 16;
      line(x + 22, yy, x + w - 30 - i * 18, yy, [210, 230, 240], 0.11, 1);
    }
  }

  const nodes = [
    [width * 0.49, height * 0.36],
    [width * 0.62, height * 0.31],
    [width * 0.74, height * 0.42],
    [width * 0.58, height * 0.61],
    [width * 0.82, height * 0.62],
  ];

  for (let i = 0; i < nodes.length - 1; i += 1) {
    line(nodes[i][0], nodes[i][1], nodes[i + 1][0], nodes[i + 1][1], [54, 184, 200], 0.2, 2);
  }
  line(nodes[0][0], nodes[0][1], nodes[3][0], nodes[3][1], [198, 161, 91], 0.18, 2);
  line(nodes[1][0], nodes[1][1], nodes[4][0], nodes[4][1], [54, 184, 200], 0.14, 2);

  for (const [x, y] of nodes) {
    circle(x, y, 34, [54, 184, 200], 0.08);
    circle(x, y, 10, [198, 161, 91], 0.75);
    circle(x, y, 4, [255, 255, 255], 0.8);
  }

  return pixels;
}

function writeAsset(name, width, height) {
  const image = png(width, height, makeCanvas(width, height));
  writeFileSync(join(root, 'public', name), image);
  if (name === 'assets/hero-workflow.png') {
    writeFileSync(join(assetDir, 'hero-workflow.png'), image);
  }
}

writeAsset('assets/hero-workflow.png', 1600, 1000);
writeAsset('og-image.png', 1200, 630);

console.log('Generated hero-workflow.png and og-image.png');

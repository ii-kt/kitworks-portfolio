# KiT Works Portfolio

飯野 海斗 / KiT Works の GitHub Pages 向けポートフォリオサイトです。

AI活用支援、業務改善、PMO/PL支援、要件整理、開発支援の内容を、クラウドワークス等で案件応募時に提出しやすいWeb版スキルシートとして構成しています。

## 技術構成

- Vite
- React
- TypeScript
- CSS
- lucide-react

## ローカル起動

PowerShell で `npm.ps1` が実行ポリシーにより止まる場合は `npm.cmd` を使ってください。

```bash
npm.cmd install
npm.cmd run dev
```

通常の環境では以下でも動作します。

```bash
npm install
npm run dev
```

## ビルド

```bash
npm.cmd run build
```

ビルド成果物は `dist/` に出力されます。

## GitHub Pages 公開

このリポジトリ名を `kitworks-portfolio` として GitHub Pages に公開する場合、Vite の `base` は本番ビルド時に `/kitworks-portfolio/` になります。

GitHub Actions で公開する場合は、`.github/workflows/deploy.yml` を利用できます。GitHub 側で以下を設定してください。

1. Repository Settings を開く
2. Pages を開く
3. Source を `GitHub Actions` に設定する
4. `main` ブランチへ push する

リポジトリ名が変わる場合は、公開時に環境変数 `BASE_PATH` を変更してください。

```bash
BASE_PATH=/new-repository-name/ npm.cmd run build
```

## 公開URLの調整

`index.html`、`public/robots.txt`、`public/sitemap.xml` のURLは、暫定で以下を設定しています。

```text
https://ii-kt.github.io/kitworks-portfolio/
```

実際の GitHub ユーザー名やカスタムドメインが異なる場合は、公開前に差し替えてください。

## コンテンツ編集

支援内容、実績、スキル、進め方、資格は以下に分離しています。

```text
src/data/portfolio.ts
```

実績を追加する場合は `caseStudies` 配列にカードを追加してください。守秘義務に配慮し、企業名や製品名を特定しすぎない表現を維持してください。

## 画像アセット

OGP画像などの公開用アセットは外部素材を使わず、`scripts/generate-assets.mjs` で生成しています。

```bash
npm.cmd run generate:assets
```

主な生成先:

- `public/assets/hero-workflow.png`
- `public/og-image.png`

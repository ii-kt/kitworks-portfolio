import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const productionBase = process.env.BASE_PATH ?? '/kitworks-portfolio/';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? productionBase : '/',
  plugins: [react()],
}));

import { defineConfig } from 'vite';

export default defineConfig({
  // Убираем root: 'src' — оставляем корнем проект
  // root: 'src',  // ❌ удали эту строку

  // Папка с favicon, изображениями и т.д.
  publicDir: 'public',

  // Базовый путь — важен для GitHub Pages
  base: '/web-core-1_4/',
  build: {
    // Куда собирать
    outDir: 'dist',
    cssCodeSplit: true,
    
    emptyOutDir: true,
    // Подпапка для ассетов
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html', // index.html в корне
        // можно добавить другие HTML-страницы
      },
    },
  },

  server: {
    port: 3000,
    open: true,
  },
});
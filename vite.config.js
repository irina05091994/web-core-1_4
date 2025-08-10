import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // означает — текущая папка (где vite.config.js)
  publicDir: '../public', // папка с статикой (favicon, img)
  build: {
    outDir: '../dist',   // куда собирать
    emptyOutDir: true,   // очищать dist перед сборкой
    assetsDir: 'assets', // подпапка для ассетов: dist/assets/
    rollupOptions: {
      input: {
        main: 'index.html',
        // добавь другие HTML-страницы, если нужно
      },
    },
  },
  server: {
    port: 3000,
    open: true,          // открыть браузер при запуске
  },
});
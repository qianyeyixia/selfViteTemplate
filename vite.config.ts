import { defineConfig, ConfigEnv } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import styleImport from 'vite-plugin-style-import';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    vueJsx(),
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/index`;
          },
        },
      ]
    })
  ],
  build: {
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      // moment: 'moment/dist/moment.js',
      '~@': path.join(__dirname, './src'),
      '@': path.join(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: 
      }
    }
  }
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // o @vitejs/plugin-react si usas React

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom' // o 'happy-dom' para pruebas de DOM
  }
})
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub repository: https://github.com/cchu-fju/CGVLab-FJU
export default defineConfig({
  plugins: [vue()],
  base: '/CGVLab-FJU/',
})

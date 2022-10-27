import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
})

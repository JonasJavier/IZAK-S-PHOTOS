import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  // Django serves the build under /static/; Netlify sets VITE_BASE=/ (see netlify.toml).
  base: command === 'build' ? process.env.VITE_BASE || '/static/' : '/',
  plugins: [react()],
}))

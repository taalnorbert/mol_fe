import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 80,
    allowedHosts: ["torzsdb.ddc-int.sze.hu"]
  },
  base: '/mol_fe/',
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})

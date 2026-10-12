import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to <username>.github.io directly, base is '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})

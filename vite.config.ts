import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from 'dotenv'
import apiProxy from './vite-plugin-api'

// Load .env so the API plugin can read OPENAI_API_KEY at dev time
config()

export default defineConfig({
  plugins: [react(), apiProxy()],
  base: './',
})
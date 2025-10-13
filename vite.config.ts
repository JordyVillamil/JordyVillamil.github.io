// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' 

export default defineConfig({
  base: '/portfolio-Jordy-Villamil/',
  plugins: [react()],
  resolve: {
    alias: {
      // Reemplaza "framer-motion" con la ruta absoluta al paquete en node_modules
      'framer-motion': path.resolve(__dirname, 'node_modules/framer-motion'),
    },
  },

  // La propiedad 'base' debe seguir eliminada si estás usando el repositorio de usuario (JordyVillamil.github.io)
})
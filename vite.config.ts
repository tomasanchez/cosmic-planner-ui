import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    watch:{
        usePolling:true
    },
    host: true,
    strictPort: true, // needed for the Docker Container port mapping to work
    port: 5174, // you can replace this port with any port
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(new URL('./', import.meta.url).pathname, 'node_modules/bootstrap'),
    },
  },
})

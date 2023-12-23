import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "/src/assets"),
    },
  }
  ,build: {
    rollupOptions: {
      output: {
        assetFileNames: (asset) => {
          if (parse(asset.name).name === 'externalImage') {
            return "images/src/[name][extname]";
          }
          return "assets/[name].[hash][extname]";
        }
      },
    },
  },
});
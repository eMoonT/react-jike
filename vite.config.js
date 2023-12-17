import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // 配置别名
  resolve: {
    alias: {
      "@": path.resolve("./src"), // @代替src
      "#": path.resolve("./types"), // #代替types
    },
  },
})

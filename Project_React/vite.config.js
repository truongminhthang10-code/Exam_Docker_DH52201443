import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {           // <--- THÊM ĐOẠN NÀY
    host: true,       // Cho phép Docker tiếp nhận kết nối từ bên ngoài
    port: 3000,       // Ép Vite chạy đúng cổng 3000
  }
})
# 1. Sử dụng Node.js bản nhẹ (alpine) để chạy React
FROM node:22-alpine

# 2. Thiết lập thư mục làm việc bên trong container
WORKDIR /app

# 3. Copy file định nghĩa thư viện vào trước (để tận dụng cache của Docker)
COPY package*.json ./

# 4. Cài đặt các thư viện (nếu có file package.json)
# (Dùng dấu || true để không báo lỗi nếu chưa có file package.json lúc đầu)
RUN npm install || true

# 5. Mở cổng 3000 (Cổng mặc định của React/Vite)
EXPOSE 3000

# 6. Lệnh chạy mặc định
CMD ["npm", "run", "dev", "--", "--host"]
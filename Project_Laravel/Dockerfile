# Sử dụng PHP 8.2 đúng yêu cầu đề bài
FROM php:8.2-fpm

# Cài đặt các thư viện cần thiết cho Laravel
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    unzip \
    git \
    && docker-php-ext-install pdo_mysql zip

# Cài đặt Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Thiết lập thư mục làm việc
WORKDIR /var/www

# --- PHẦN QUAN TRỌNG CẦN THÊM VÀO ---

# 1. Copy toàn bộ code từ máy tính vào trong Container
COPY . .

# 2. Cài đặt các gói thư viện của Laravel (vendor)
RUN composer install --no-dev --optimize-autoloader

# 3. Cấp quyền cho thư mục storage và cache (để tránh lỗi permission denied sau này)
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# 4. Mở port 8000 (hoặc port bạn muốn dùng)
EXPOSE 8000

# 5. Lệnh chạy server khi container khởi động
CMD php artisan serve --host=0.0.0.0 --port=8000

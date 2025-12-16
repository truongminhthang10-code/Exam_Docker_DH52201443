# Sử dụng PHP 8.2 đúng yêu cầu đề bài
FROM php:8.2-fpm

# Cài đặt các thư viện cần thiết cho Laravel (zip, git, mysql...)
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    unzip \
    git \
    && docker-php-ext-install pdo_mysql zip

# Cài đặt Composer (Công cụ quản lý thư viện của PHP)
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Thiết lập thư mục làm việc
WORKDIR /var/www
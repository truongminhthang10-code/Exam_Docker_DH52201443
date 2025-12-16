FROM php:8.2-fpm

# 1. Cài đặt thư viện hệ thống cần thiết
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    unzip \
    git \
    curl \
    libonig-dev \
    libzip-dev \
    libgd-dev

# 2. Cài đặt PHP Extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install pdo_mysql mbstring zip exif pcntl gd

# 3. Cài đặt Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 4. Thiết lập thư mục làm việc
WORKDIR /var/www

# --- ĐOẠN QUAN TRỌNG ĐÃ SỬA ---
# Copy code từ thư mục src (trên máy) vào /var/www (trong container)
COPY ./src /var/www

# 5. Cài đặt các gói thư viện của Laravel
RUN composer install --no-dev --optimize-autoloader

# 6. Cấp quyền ghi file cho Laravel
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

EXPOSE 9000
CMD ["php-fpm"]
<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

use Illuminate\Support\Facades\Artisan;

Route::get('/run-migrate', function () {
    Artisan::call('migrate --force');
    return 'Đã tạo bảng Database thành công!';
});

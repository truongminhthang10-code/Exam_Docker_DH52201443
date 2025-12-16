<?php

use Illuminate\Support\Facades\Route;

Route::get('/hello', function () {
    return response()->json([
        'message' => 'Xin chao React! Day la du lieu gui tu Laravel Docker!'
    ]);
});



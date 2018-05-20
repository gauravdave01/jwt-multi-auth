<?php
// Auth middleware is already implemented here. So no need to implement one.

Route::get('/home', function () {return view('user.home');})->name('home');
Route::get('/test', function(){echo "GD";});
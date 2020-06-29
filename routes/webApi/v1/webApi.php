<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

//Prefix:     api/v1
//Namespace API
//middleware: web

//Users
//current user
Route::get('users/current', 'CurrentUserController@show');
Route::post('users/current', 'CurrentUserController@update');
Route::delete('users/current', 'CurrentUserController@destroy');
//all users
//export
Route::get('users/export', 'UsersController@export');
//stats
Route::get('users/metrics','UsersMetricsController@index');
//common
Route::apiResource('users', 'UsersController')->except(['destroy']);
Route::delete('users/{user}', 'UsersController@delete');
Route::post('users/{user}/restore', 'UsersController@restore');
Route::delete('users/{user}/destroy', 'UsersController@destroy');
Route::post('users/{user}/send-email-verification', 'UsersController@sendEmailVerification');


//Roles and Permissions
Route::apiResource('roles', 'RolesController')->except(['destroy']);
Route::apiResource('permissions', 'PermissionsController')->except(['destroy','create','update','store']);

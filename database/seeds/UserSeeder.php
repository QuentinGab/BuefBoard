<?php

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $god = User::create([
            'first_name' => 'Bill',
            'last_name' => 'Gates',
            'email' => 'bill.gates@gmail.com',
            'password' => Hash::make('password'),
        ])->assignRole('god');

        $admin = User::create([
            'first_name' => 'Admin',
            'last_name' => 'Istrator',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('password'),
        ])->assignRole('admin');

        $admin = User::create([
            'first_name' => 'Moder',
            'last_name' => 'Ator',
            'email' => 'moderator@gmail.com',
            'password' => Hash::make('password'),
        ])->assignRole('moderator');

        factory(App\Models\User::class, 50)->create();

    }
}

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
            'first_name' => 'Quentin',
            'last_name' => 'Gabriele',
            'email' => 'quentin.gabriele@gmail.com',
            'password' => Hash::make('password'),
        ])->assignRole('god');

        $admin = User::create([
            'first_name' => 'Admin',
            'last_name' => 'Istrator',
            'email' => 'admin.istrator@gmail.com',
            'password' => Hash::make('password'),
        ])->assignRole('admin');

        factory(App\Models\User::class, 50)->create();

    }
}

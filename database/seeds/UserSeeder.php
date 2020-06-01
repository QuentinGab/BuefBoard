<?php

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
        DB::table('users')->insert([
            'first_name' => 'Quentin',
            'last_name' => 'Gabriele',
            'email' => 'quentin.gabriele@gmail.com',
            'password' => Hash::make('password'),
        ]);
    }
}

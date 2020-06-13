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

        $user = User::create([
            'first_name' => 'Quentin',
            'last_name' => 'Gabriele',
            'email' => 'quentin.gabriele@gmail.com',
            'password' => Hash::make('password'),
        ]);

        $user->assignRole('god');

        factory(App\Models\User::class, 50)->create();

    }
}

<?php

namespace App\Http\Requests\Users;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        //auth is done
        return true;
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $master = $this->user();

        $rolesCollection = collect($this->roles);

        if ($master->hasRole('god')) {
            $roles = $rolesCollection->pluck('name');
        } else {
            $roles = $rolesCollection->pluck('name')->reject(function ($role, $key) {
                return $role == 'god';
            });
        }

        $this->merge([
            'roles' => $roles
                ->toArray(),
        ]);

    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => ['required', 'email'],
            'first_name' => ['required'],
            'last_name' => ['required'],
            'roles' => ['array'],
            'blocked_at' => ["nullable"],
        ];
    }
}

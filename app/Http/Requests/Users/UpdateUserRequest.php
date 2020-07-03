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
        $this->prepareRoles();

    }

    protected function preparePermissions()
    {
        $master = $this->user();

        $permissionsCollection = collect($this->permissions);

        if ($master->hasRole('god')) {
            $permissions = $permissionsCollection->pluck('name');
        } else {
            //you can't give permissions that you don't have
            $permissions = $permissionsCollection->pluck('name')->reject(function ($permission, $key) {
                return !$master->can($permission);
            });
        }

        $this->merge([
            'permissions' => $permissions
                ->toArray(),
        ]);
    }

    protected function prepareRoles()
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
            'roles' => ['sometimes', 'array'],
            'permissions' => ['sometimes', 'array'],
            'password' => [
                'sometimes',
                'min:6',
                'regex:/[a-z]/', // must contain at least one lowercase letter
                'regex:/[A-Z]/', // must contain at least one uppercase letter
                'regex:/[0-9]/', // must contain at least one digit
                'regex:/[@$!%*#?&]/', // must contain a special character
                'confirmed',
            ],
            'password_confirmation' => ['sometimes'],
            'blocked_at' => ["nullable"],
        ];
    }
}

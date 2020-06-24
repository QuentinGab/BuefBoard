<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class UpdateUser extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {

        $master = $this->user();
        $user = $this->route('user');
        $areSameUser = $user->id === $master->id;
        $isUserGod = $user->hasRole('god');
        $isMasterGod = $master->hasRole('god');

        if ($areSameUser) {
            //you can update yourself
            return true;
        }

        if ($isMasterGod) {
            //a god can update everybody
            return true;
        } else if ($isUserGod) {
            //only a god can update a god
            return false;
        }

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
        $user = $this->route('user');
        $areSameUser = $user->id === $master->id;
        $isUserGod = $user->hasRole('god');
        $isMasterGod = $master->hasRole('god');

        if ($areSameUser) {
            //you can update your role
            if ($isUserGod) {
                //a god can assign any role but can't remove his god power
                $this->merge([
                    'roles' => collect($this->roles)
                        ->pluck('name')
                        ->union(['god'])
                        ->toArray(),
                ]);
            } else {
                //only a god can make another god
                $this->merge([
                    'roles' => collect($this->roles)
                        ->pluck('name')
                        ->reject(function ($role, $key) {
                            return $role == 'god';
                        })
                        ->toArray(),
                ]);
            }
        } else {
            if ($isMasterGod and $isUserGod) {
                //a god has all rights on another god
                $this->merge([
                    'roles' => collect($this->roles)
                        ->pluck('name')
                        ->toArray(),
                ]);
            } else if ($isMasterGod) {
                //a god has all rights
                $this->merge([
                    'roles' => collect($this->roles)
                        ->pluck('name')
                        ->toArray(),
                ]);
            } else if ($isUserGod) {
                //only a god can update a god
                $this->merge([
                    'roles' => $user->getRoleNames(),
                ]);
            }
        }

    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => ['required'],
            'first_name' => ['required'],
            'last_name' => ['required'],
            'roles' => ['array'],
            'blocked_at'=> ["nullable"]
        ];
    }
}

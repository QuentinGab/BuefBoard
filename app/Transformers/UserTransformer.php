<?php

namespace App\Transformers;

use App\Models\User;
use League\Fractal\TransformerAbstract;

class UserTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        //
    ];

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        //
    ];

    /**
     * A Fractal transformer.
     *
     * @return array
     */
    public function transform(User $user)
    {
        return [
            'id' => $user->id,
            'first_name' => $user->first_name,
            'last_name' => $user->last_name,
            'email' => $user->email,
            'created_at' => $user->created_at,
            'updated_at' => $user->updated_at,
            'confirmed_at' => $user->confirmed_at,
            'roles' => $user->getRoleNames(),
            'permissions' => $user->getPermissionNames(),
        ];
    }

    // /**
    //  * Include roles.
    //  *
    //  * @param \App\Models\User
    //  *
    //  * @return \League\Fractal\ItemResource
    //  */
    // public function includeRoles(User $user)
    // {
    //     $roles = $user->getRoleNames();
    //     return $roles;

    //     return $this->collection($roles);
    // }
}

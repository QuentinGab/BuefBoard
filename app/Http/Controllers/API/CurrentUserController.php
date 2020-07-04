<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Users\UpdateUserPasswordRequest;
use App\Http\Requests\Users\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Spatie\QueryBuilder\QueryBuilder;

class CurrentUserController extends Controller
{

    /**
     * Display the current user.
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $user = QueryBuilder::for(User::class) 
                ->allowedIncludes(['roles', 'roles.permissions', 'permissions'])
                ->find($request->user()->id);

        $this->authorize('view', $user);

        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Users\UpdateUserRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRequest $request)
    {
        $user = $request->user();
        $this->authorize('update', $user);

        $validated = $request->validated();

        $user->update(
            $validated
        );

        return new UserResource($user);
    }

    /**
     * Update current user's password
     *
     * @param \App\Http\Requests\Users\UpdateUserPasswordRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function updatePassword(UpdateUserPasswordRequest $request)
    {
        $user = $request->user();
        $this->authorize('update', $user);

        $validated = $request->validated();

        $user->password = Hash::make($validated['password']);
        $user->save();

        return new UserResource($user);
    }

    /**
     * Remove the user from storage.
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $user = $request->user();
        $this->authorize('forceDelete', $user);

        $user->forceDelete();
        return new UserResource($user);
    }

}

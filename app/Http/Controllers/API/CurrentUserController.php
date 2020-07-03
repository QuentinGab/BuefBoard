<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\QueryBuilder;

class CurrentUserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

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
}

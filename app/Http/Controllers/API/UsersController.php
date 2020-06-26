<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Users\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

use Illuminate\Support\Carbon;

class UsersController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware(['role:admin|god']);
    }

    /**
     * Display all the users (not in trash).
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('viewAny', User::class);

        $users = QueryBuilder::for(User::class)
                ->allowedFilters([
                    'first_name',
                    'last_name',
                    AllowedFilter::exact('id'),
                    AllowedFilter::trashed(),
                    AllowedFilter::scope('created_before'),
                    AllowedFilter::scope('created_after'),
                    'email',
                ])
                ->allowedSorts([
                    'first_name',
                    'last_name',
                    'id',
                    'email',
                    'email_verified_at',
                    'updated_at',
                    'blocked_at',
                    'created_at',
                ])
                ->allowedIncludes(['roles', 'roles.permissions', 'permissions'])
                ->defaultSort('id')
                ->paginate(15);

        return UserResource::collection($users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $user = User::create($request->only([
        //     'first_name',
        //     'last_name',
        //     'email',
        // ]));

        // return new UserResource($user);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $userId
     * @return \Illuminate\Http\Response
     */
    public function show($userId)
    {
        $user = QueryBuilder::for(User::class)
                ->withTrashed()
                ->allowedIncludes(['roles', 'roles.permissions', 'permissions'])
                ->find($userId);

        $this->authorize('view', $user);

        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Users\UpdateUserRequest  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $this->authorize('update', $user);

        $validated = $request->validated();

        $user->update(
            $validated
        );

        $user->syncRoles($validated['roles']);
        $user->syncPermissions($validated['permissions']);

        if ($validated['blocked_at']) {
            if (!$user->isBlocked()) {
                $user->block();
            }
        } else if ($user->isBlocked()) {
            $user->unblock();
        }

        return new UserResource($user);
    }

    /**
     * Remove the user from storage.
     * @param  int  $userId
     * @return \Illuminate\Http\Response
     */
    public function destroy($userId)
    {
        $user = User::withTrashed()->find($userId);
        $this->authorize('forceDelete', $userId);

        $user->forceDelete();
        return new UserResource($user);
    }

    /**
     * Soft Delete the user.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function delete(User $user)
    {
        $this->authorize('delete', $user);

        $user->delete();
        return new UserResource($user);
    }

    /**
     * Restore the user from storage.
     *
     * @param   int $userId
     * @return \Illuminate\Http\Response
     */
    public function restore($userId)
    {
        $user = User::withTrashed()->find($userId);

        $this->authorize('delete', $user);

        $user->restore();
        return new UserResource($user);
    }

    /**
     * Block the user.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function block(User $user)
    {
        $this->authorize('update', $user);

        $user->block();
        return new UserResource($user);
    }

    /**
     * Resend the email verification
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function sendEmailVerification(User $user)
    {
        $this->authorize('update', $user);

        $user->sendEmailVerificationNotification();
        return new UserResource($user);
    }

    /**
     * mark user email as verified
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function markEmailAsVerified(User $user)
    {
        $this->authorize('update', $user);

        $user->markEmailAsVerified();
        return new UserResource($user);
    }

    /**
     * Export users to excel
     */
    public function export(Request $request)
    {
        $this->authorize('viewAny', $user);

        $users = QueryBuilder::for(User::class)
                ->allowedFilters([
                    AllowedFilter::exact('id'),
                    AllowedFilter::trashed(),
                ])
                ->allowedIncludes(['roles', 'roles.permissions', 'permissions'])
                ->defaultSort('id')
                ->get();

        return UserResource::collection($users)->downloadExcel(
            'users.xlsx',
            $writerType = null,
            $headings = true
        );
    }
}

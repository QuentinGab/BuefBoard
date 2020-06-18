<?php

namespace App\Http\Controllers\API;

use App\Exports\UsersExport;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $users = QueryBuilder::for(User::class)
                ->allowedFilters([
                    'first_name',
                    'last_name',
                    AllowedFilter::exact('id'),
                    'email',
                    'email_verified_at',
                    'updated_at',
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $user->save();
        $user->update(
            $request->only([
                'first_name',
                'last_name',
                'email',
            ])
        );
        if ($request->filled('blocked_at')) {
            $user->block();
        } else if ($user->isBlocked()) {
            $user->unblock();
        }

        return new UserResource($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->forceDelete();
        return new UserResource($user);
    }

    /**
     * Delete the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function delete(User $user)
    {
        $user->delete();
        return new UserResource($user);
    }

    /**
     * Restore the specified resource from storage.
     *
     * @param   $user
     * @return \Illuminate\Http\Response
     */
    public function restore($user)
    {
        $user = User::withTrashed()->find($user);
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
        $user->markEmailAsVerified();
        return new UserResource($user);
    }

    /**
     * Export users to excel
     */
    public function export(Request $request)
    {
        $users = QueryBuilder::for(User::class) 
                ->allowedFilters([
                    AllowedFilter::exact('id'),
                ])
                ->allowedIncludes(['roles', 'roles.permissions', 'permissions'])
                ->defaultSort('id')
                ->get();
        

        return $users->downloadExcel(
            'users.xlsx',
            $writerType = null,
            $headings = true
        );
        // Excel::download(new UsersExport, 'users.xlsx');
    }
}

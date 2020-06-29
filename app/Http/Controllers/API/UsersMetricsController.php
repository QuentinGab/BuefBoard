<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;
use App\Http\Metrics\UsersMetrics;

class UsersMetricsController extends Controller
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
                ->defaultSort('id')
                ->allowedFields(['id', 'first_name','last_name','created_at'])
                ->get();
        
        return new UsersMetrics($users);
    }
}

<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Activitylog\Models\Activity;
use Spatie\QueryBuilder\AllowedFilter;
use Illuminate\Support\Carbon;

use Spatie\QueryBuilder\QueryBuilder;

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
     * Display all the users
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorize('viewAny', User::class);

        $users = QueryBuilder::for(User::class)
                ->withTrashed()
                ->allowedFilters([
                    AllowedFilter::scope('created_before'),
                    AllowedFilter::scope('created_after'),
                ])
                ->get();

        /* Overview */
        $active = User::count();
        $blocked = User::where('blocked_at', '!=', null)->count();
        $trashed = User::onlyTrashed()->count();

        $countByDay = $users->countBy(function ($item) {
            return $item->created_at->format('Y-m-d');
        });

        /* Activities */
        $activities = Activity::inLog('users');
        if ($request->filled('filter.created_after')) {
            $startDate = Carbon::parse($request->input('filter.created_after'));
            $activities->where('created_at', '>=', $startDate);
        }
        $activities = $activities->get();

        return [
            'data' => $countByDay,
            'overview' => [
                'total' => $active + $trashed,
                'active' => $active,
                'blocked' => $blocked,
                'trashed' => $trashed,
            ],
            'activity' => [
                'created' => $activities->where('description', 'created')->count(),
                'deleted' => $activities->where('description', 'deleted')->count(),
            ],
        ];
    }
}

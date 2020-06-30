<?php

namespace App\Http\Metrics;

use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Carbon;

class UsersMetrics extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $data = $request->boolean('cumulative') ? $this->cumulativeCount($request) : $this->countByDay($request);
        $sum = $data->sum();

        return [
            'data' => $data,
            'overview' => $this->overview($request),
            'meta' => [
                'total' => $sum,
                'after' => $this->when(
                    $request->filled('filter.created_after'),
                    $request->input('filter.created_after')
                ),
                'before' => $this->when(
                    $request->filled('created_before'),
                    $request->input('filter.created_before')
                ),
            ],
            'request' => $request->all(),
        ];
    }

    private function overview($request)
    {
        return [
            'total' => $this->collection->count(),
            'blocked' => $this->collection->where('blocked_at', '!=', null)->count(),
            'deleted' => $this->collection->where('deleted_at', '!=', null)->count(),
            'new' => [
                'day' => $this->collection->where('created_at', '>', Carbon::now()->subDays(1))->count(),
                'week' => $this->collection->where('created_at', '>', Carbon::now()->subDays(7))->count(),
                'month' => $this->collection->where('created_at', '>', Carbon::now()->subMonth())->count(),
                'year' => $this->collection->where('created_at', '>', Carbon::now()->subYearWithNoOverflow())->count(),
            ],
        ];
    }

    private function countByDay($request)
    {
        return $this->collection->countBy(function ($item) {
            return $item->created_at->format('Y-m-d');
        });
    }

    private function cumulativeCount($request)
    {
        $startDate = $this->collection->sortBy('created_at')->first()->created_at;

        $prev = $this->collection->where('created_at', '<', $startDate)->count();

        $counted = $counted = $this->collection->countBy(function ($item) {
            return $item->created_at->format('Y-m-d');
        });

        foreach ($counted as $date => $value) {
            $counted[$date] = $prev + $value;
            $prev = $value;
        }
        return $counted;
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class UserStatsCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $counted = $this->collection->countBy(function ($item) {
            return $item->created_at->format('Y-m-d');
        });
        $sum = $counted->sum();
        return [
            'data' => $counted,
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
}

<?php

namespace App\Http\Metrics;

use Illuminate\Http\Resources\Json\ResourceCollection;

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
        $counted = $this->collection->countBy(function ($item) {
            return $item->created_at->format('Y-m-d');
        });
        $isCumulative = $request->boolean('cumulative');
        // if ($isCumulative) {
        //     $prev = 0;
        //     foreach ($counted as $key => $value) {
        //         $sum = $value + $prev;
        //         $prev = $value;
        //         $counted[$key] = $sum;
        //     }
        // }
        $sum = $counted->sum();
        return [
            'data' => $counted,
            'meta' => [
                'total' => $sum,
                'cumulative'=>$isCumulative,
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

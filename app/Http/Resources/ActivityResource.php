<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ActivityResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'log_name' => $this->log_name,
            'description' => $this->description,
            'updated_at' => $this->updated_at,
            'created_at' => $this->created_at,
            'causer' => $this->when($this->causer_type === 'App\Models\User', new UserResource($this->causer)),
        ];
    }
}

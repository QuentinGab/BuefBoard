<?php

namespace App\Models\Traits\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Carbon;

trait UserScope
{
    /**
     * Scope a query to only include created_before users
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeCreatedBefore(Builder $query, $date): Builder
    {
        return $query->where('created_at', '<=', Carbon::parse($date));
    }

    public function scopeCreatedAfter(Builder $query, $date): Builder
    {
        return $query->where('created_at', '>=', Carbon::parse($date));
    }

    // public function scopeRoles(Builder $query, $role): Builder
    // {
    //     return $query->role($role);
    // }
    // public function scopePermission(Builder $query, $permission): Builder
    // {
    //     return $query->permission($permission);
    // }

}

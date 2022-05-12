<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductsSpecsAttribute extends Model
{
    use HasFactory;

    public function attribute()
    {
        return $this->hasOne(Attribute::class,'id','attribute_id');
    }

}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductsSpec extends Model
{
    use HasFactory;

    public function spec()
    {
        return $this->hasOne(Spec::class,'id','spec_id');
    }

    public function attributes()
    {
        return $this->hasMany(ProductsSpecsAttribute::class,'product_spec_id','id')->with('attribute');
    }

}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;


    protected $fillable = [
        'name',
        'sku',
        'cost',
        'category_id',
        'brand'
    ];

    protected $appends = array('price');

    public function category()
    {
        return $this->hasOne(Category::class,'id','category_id');
    }

    public function specs()
    {
        return $this->hasMany(ProductsSpec::class)->with('spec')->with('attributes');
    }

    public function getPriceAttribute()
    {
        $category = $this->hasOne(Category::class,'id','category_id')->first();

        if(!$category) return $this->cost;
       // dump($category->profit_margin_percent);
        $price = $this->cost+(($this->cost*$category->profit_margin_percent)/100);
        return $price;
    }

}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductsSeeder  extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('products')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Producto 1',
                'brand' => 'Marca1',
                'cost' => '100',
                'sku' => '81212',
                'category_id'=>'1'
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Producto 2',
                'brand' => 'Marca2',
                'cost' => '110',
                'sku' => '81222',
                'category_id'=>'2'
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Producto 3',
                'brand' => 'Marca3',
                'cost' => '120',
                'sku' => '81211',
                'category_id'=>'3'
            ),
           
           
        ));

    }
}

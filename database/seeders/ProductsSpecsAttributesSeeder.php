<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductsSpecsAttributesSeeder  extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('products_specs_attributes')->insert(array (
            0 => 
            array (
                'id' => 1,
                'product_spec_id' => '1',
                'attribute_id' => '1',
            ),
            1 => 
            array (
                'id' => 2,
                'product_spec_id' => '1',
                'attribute_id' => '2',
            ),
            2 => 
            array (
                'id' => 3,
                'product_spec_id' => '1',
                'attribute_id' => '3',
            ),
            3 => 
            array (
                'id' => 4,
                'product_spec_id' => '3',
                'attribute_id' => '4',
            ),
            4 => 
            array (
                'id' => 5,
                'product_spec_id' => '3',
                'attribute_id' => '5',
            ),
            5 => 
            array (
                'id' => 6,
                'product_spec_id' => '5',
                'attribute_id' => '6',
            ),5 => 
            array (
                'id' => 6,
                'product_spec_id' => '5',
                'attribute_id' => '7',
            )
           
           
        ));

    }
}

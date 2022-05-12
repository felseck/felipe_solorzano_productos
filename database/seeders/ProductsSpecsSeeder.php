<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductsSpecsSeeder  extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('products_specs')->insert(array (
            0 => 
            array (
                'id' => 1,
                'product_id' => '1',
                'spec_id' => '1',
            ),
            1 => 
            array (
                'id' => 2,
                'product_id' => '1',
                'spec_id' => '2',
            ),
            2 => 
            array (
                'id' => 3,
                'product_id' => '2',
                'spec_id' => '3',
            ),
            3 => 
            array (
                'id' => 4,
                'product_id' => '2',
                'spec_id' => '4',
            ),
            4 => 
            array (
                'id' => 5,
                'product_id' => '3',
                'spec_id' => '5',
            ),
            5 => 
            array (
                'id' => 6,
                'product_id' => '3',
                'spec_id' => '6',
            )
           
           
        ));

    }
}

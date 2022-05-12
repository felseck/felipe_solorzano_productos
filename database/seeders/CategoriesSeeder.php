<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriesSeeder  extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('categories')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Televisor',
                'profit_margin_percent'=>35
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Laptops',
                'profit_margin_percent'=>40
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Zapatos',
                'profit_margin_percent'=>30
            ),
           
           
        ));

    }
}

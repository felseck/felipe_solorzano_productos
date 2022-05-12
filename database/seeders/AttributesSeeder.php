<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AttributesSeeder  extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('attributes')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'LED',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'LCD',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'OLED',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Intel',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'AMD',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Piel',
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'Plastico',
            )
           
           
        ));

    }
}

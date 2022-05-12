<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SpecsSeeder  extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('specs')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Tipo de pantalla',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Tamaño de pantalla',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Procesador',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Memoria Ram',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Material',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Numero / Tamaño',
            )
           
           
           
        ));

    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products_specs_attributes', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('product_spec_id')->nullable()->index();
            $table->foreign('product_spec_id')->references('id')->on('products_specs')->cascadeOnDelete(); 


            $table->unsignedBigInteger('attribute_id')->nullable()->index();
            $table->foreign('attribute_id')->references('id')->on('attributes')->cascadeOnDelete(); 

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products_specs_attributes');
    }
};

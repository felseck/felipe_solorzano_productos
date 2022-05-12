<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductsSpec;
use App\Models\ProductsSpecsAttribute;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::with('category')->orderBy('id', 'desc')->get();
        
        return response()->json($products);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $product = new Product;
        
        $product->name = $request->name;
        $product->cost = $request->cost;
        $product->sku = $request->sku;
        $product->brand = $request->brand;
        $product->category_id = $request->category_id;

        $product->save();

        foreach($request->specs as $spec){
            $productSpec = new ProductsSpec;
            $productSpec->product_id = $product->id;
            $productSpec->spec_id = $spec;
            $productSpec->save();


            foreach($request->specs_attributes as $spec_attribute){

                if(!isset($spec_attribute)) continue;

                if($spec == $spec_attribute['spec_id']){

                 //  dump($spec_attribute);

               foreach($spec_attribute['attributes'] as $attribute){
                  $productSpecAttribute = new ProductsSpecsAttribute;
                  $productSpecAttribute->product_spec_id = $productSpec->id;
                  $productSpecAttribute->attribute_id = $attribute;
                  $productSpecAttribute->save();
                }

                }
            }


        }

        return response()->json(['result'=>true,'successMessage'=>'Se creó correctamente']);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::where('id',$id)->with('category')->with('specs')->first();
        
        return response()->json($product);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {

        $product->update([
            'name'=>$request->name,
            'cost' => $request->cost,
            'sku' => $request->sku,
            'brand' => $request->brand,
            'category_id' => $request->category_id
        ]);


        ProductsSpec::where(['product_id'=>$product->id])->delete();

        foreach($request->specs as $spec){
            $productSpec = new ProductsSpec;
            $productSpec->product_id = $product->id;
            $productSpec->spec_id = $spec;
            $productSpec->save();


            foreach($request->specs_attributes as $spec_attribute){

                if(!isset($spec_attribute)) continue;

                if($spec == $spec_attribute['spec_id']){

                 //  dump($spec_attribute);

               foreach($spec_attribute['attributes'] as $attribute){
                  $productSpecAttribute = new ProductsSpecsAttribute;
                  $productSpecAttribute->product_spec_id = $productSpec->id;
                  $productSpecAttribute->attribute_id = $attribute;
                  $productSpecAttribute->save();
                }

                }
            }


        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return response()->json(['result'=>true,'successMessage'=>'Se eliminó correctamente']);
    }
}

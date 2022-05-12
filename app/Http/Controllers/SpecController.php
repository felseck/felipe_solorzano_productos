<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Spec;

class SpecController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Specs = Spec::orderBy('id', 'desc')->get();
        
        return response()->json($Specs);
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
        $Spec = new Spec;
        
        $Spec->name = $request->name;

        $Spec->save();

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
        $Spec= Spec::where('id',$id)->first();
        
        return response()->json($Spec);
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
    public function update(Request $request, Spec $Spec)
    {
        $Spec->update([
            'name'=>$request->name
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Spec $Spec)
    {
        $Spec->delete();

        return response()->json(['result'=>true,'successMessage'=>'Se eliminó correctamente']);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index() {
        $test_array = [
            [
            'id' => 1,
            'name' => 'Fabio',
            'lastname' => 'Mangolini',
            'age' => 42
            ],
            [
            'id' => 2,
            'name' => 'Arianna',
            'lastname' => 'Bernardi',
            'age' => 37
            ]
        ];
        return response()->json($test_array);
    } 
}

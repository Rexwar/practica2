<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function show()
    {
        $data = [
            'Name' => 'Rey',
            'Lastname' => 'Valdes Marangunic',
            'Email' => 'reyvaldesm@gmail.com',
            'City' => 'Calama',
            'Country' => 'Chile',
            'Summary' => 'Soy una persona resiliente, proactivo, atento, con ganas de mejorar dia a dia',
            'Frameworks' => [
                [
                    'Name' => 'Laravel',
                    'Level' => 'Principiante',
                    'Year' => 2023
                ],
                [
                    'Name' => 'javalin',
                    'Level' => 'Principiante',
                    'Year' => 2023
                ],
                [
                    'Name' => 'react',
                    'Level' => 'Principiante',
                    'Year' => 2023
                ],
                [
                    'Name' => 'React Native',
                    'Level' => 'Principiante',
                    'Year' => 2023
                ],
                // otros frameworks...
            ],
            'Hobbies' => [
                [
                    'Name' => 'Bicicleta',
                    'Description' => 'ir a varios destinos en bicicleta, practicar trucos basicos como andar sin manos, cargado en un solo pedal, ejercitando equilibro'
                ],
                [
                    'Name' => 'tech rabbit hole',
                    'Description' => 'ver videos de divulgadores cientificos en youtube mayormente para enterarme del estado del arte de diversas areas de la tecnologia'
                ],
                [
                    'Name' => 'rocket League',
                    'Description' => 'practicar la ganancia de control en el juego, practicar trucos'
                ],
                // otros hobbies...
            ]
        ];

        return response()->json($data);
    }
}

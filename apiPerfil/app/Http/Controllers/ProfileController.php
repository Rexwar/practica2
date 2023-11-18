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
            'Summary' => 'Estudio Ingenieria civil en computacion e informática en la UCN, Antofagasta, he participado en proyectos de desarrollo de software con metodologias agiles como scrum, desarrollado prototipos de videojuegos en unity, Soy una persona resiliente, proactivo, atento, con ganas de mejorar dia a dia',
            'Frameworks' => [
                [
                    'Name' => 'Laravel',
                    'Level' => 'Principiante',
                    'Year' => 2023
                ],
                [
                    'Name' => 'Javalin',
                    'Level' => 'Principiante',
                    'Year' => 2023
                ],
                [
                    'Name' => 'React',
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
                    'Name' => 'Ciclismo',
                    'Description' => 'Ir a varios destinos en bicicleta, practicar trucos basicos como andar sin manos, cargado en un solo pedal, ejercitando equilibro'
                ],
                [
                    'Name' => 'Deportes en General',
                    'Description' => 'Me gusta jugar partidos amistosos de cualquier deporte, por que lo encuentro entretenido y tambien por la experiencia que gano al practicarlo'
                ],
                [
                    'Name' => 'Tech rabbit hole',
                    'Description' => 'Ver videos de divulgadores cientificos en youtube mayormente para enterarme del estado del arte de diversas areas de la tecnologia'
                ],
                [
                    'Name' => 'Rocket League',
                    'Description' => 'Practicar la ganancia de control en el juego, practicar trucos'
                ],
                // otros hobbies...
            ]
        ];

        return response()->json($data);
    }
}

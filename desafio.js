/*
Saber cómo usar las funciones es uno de los conceptos fundamentales en la programación y 
el desarrollo de software. Las funciones desempeñan un papel crucial en la organización,
modularización y reutilización del código.
*/

/*
Con eso en mente, hemos creado una lista de desafíos (no obligatorios) centrados en la 
práctica para mejorar aún más tu experiencia de aprendizaje. ¡Vamos a practicar entonces!
*/



/*
Crea una lista vacía llamada "listaGenerica".
Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion 
con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

Crea una función que muestre en la consola todos los elementos de la lista 
"lenguagesDeProgramacion.

Crea una función que muestre en la consola todos los elementos de la lista 
"lenguagesDeProgramacion en orden inverso.

Crea una función que calcule el promedio de los elementos en una lista de números.

Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
Crea una función que devuelva la suma de todos los elementos en una lista.
Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/

//1

let listaGenerica =[];

//2
let lenguagesDeProgramacion=["JavaScript","C","C++","Kotlin","Python"];
lenguagesDeProgramacion.push("Java","Ruby","GoLang");

//3
function imprimirPorConsola(){
    console.log(lenguagesDeProgramacion);
}

//4
function imprimirAlReves(){

      let contador=0;
      let contadorHaciaAtras=lenguagesDeProgramacion.length;
      let totalDeElemntos=lenguagesDeProgramacion.length;
    
      while(contador<totalDeElemntos){
        contadorHaciaAtras--;
        console.log(`${contadorHaciaAtras}  =>  ${lenguagesDeProgramacion[contadorHaciaAtras]} `);
 

        contador++;
    }
}


function  calcularPromedio(){

let listaNumeros=[4,5,8,9,10];
let contador=0;
let promedio=0;

while(contador<listaNumeros.length){

    promedio  += listaNumeros[contador]; 

    contador++;
}

      return  promedio / listaNumeros.length ;

}


function obtenerNumeroMayoMenor(arr){
     
     let  contador = 0; 
     let  mayor=0;
     while(contador <arr.length){
       
          if(mayor>arr[contador]){
              mayor=arr[contador];
          } else{
            mayor=arr[contador];
          }

        contador++;
     }
 
     return mayor; 
        
 }

let arr=[45,4,58,1,2,6,1]

console.log(obtenerNumeroMayoMenor(arr));

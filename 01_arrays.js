//creando aarray
let  frutas  =["manzanas","Uva","Naranja"];


let contador = 0 ;
while(contador<frutas.length){    
    console.log(  ` la fruta es ${frutas[contador]}  contador es: ${contador} `);
    contador++;  
}

//Añadiendo un elemento , al final del array , usando el método push

frutas.push("Fresa");
console.log(`Se ha añadido la frutas ${frutas}` );

//Eliminar el último elemento

frutas.pop();
console.log(`Elemento eliminado ${frutas}` );

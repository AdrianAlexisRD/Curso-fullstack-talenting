// const notas = [98,87,99,100]
// metodos para agregar o eliminar elementos de un array 
// notas.push(63); // agrega al final del array 
// notas.pop();// elemina el ultimo 
// notas.unshift(91);// agrega al inicio 
// notas.shift();// elimina el primero


for ( let i=0 ; i < notas.length; i++ ){
     console.log(notas[i])

}

// Metodo para buscar elementos 
const comidas = ["locrio","sancocho","asopao","mofongo"]
console.log(comidas.indexOf("asopao"));// Busca la posicion de un elemento
console.log(comidas.includes("mofongo"));// Verifica si un elemento existe 

// Metodos para modificar un array
const colores = ["azul","roja","amarrillo","verde"]

colores.splice(1,0)// Elimina elementos especifico por su posicion
colores.splice(1,2, "violeta")// agrega elementos por su posicion
console.log(colores)

//metodo para recorrer un array 

// Ejecuta una funcion por cadaa elemento
comidas.forEach((comida) => {
     console.log(`plato: ${comida}`);
});
// Crea un array nuevo trasformando los elementos
let nuevasNotas = notas.map(nota=> nota + 2);
console.log(nuevasNotas);

// Metodos para ordenar o filtrar
 let numeros = [16,11,24,32,12]
// Ordena los elementos de menor a mayor
numeros.sort();
console.log(numeros)
// Ordena los elementos de mayor a menor
numeros.reverse();
console.log(numeros);
// Filtra elementos segun la condiciones que le apliquemos en la funcion
let mayorDeEdad = numeros.filter(numero=> numero >= 18  )
console.log(mayorDeEdad)


let numeros1 = []
for(let i = 0; i<3; i++){
     
     numeros1.push(prompt("digite un numero"))
     

     console.log(numeros1)
}


numeros1.forEach(numero => {25
     if(numero > 18){
          console.log(`es mayor de edad:${numero} `)

     }
})


const Array = [5,34,34,7,89,12,3,45,]

const elemento = document.getElementById('resultado');
console.log("hola")
let nuevoArray = Array.map(element => element+10);

let numerosFiltrados= nuevoArray.filter(element=> element >= 18 )

console.log(numerosFiltrados)
console.log(nuevoArray)
console.log(numerosFiltrados.sort())
let repeat='hola'.repeat(2)
console.log(repeat)



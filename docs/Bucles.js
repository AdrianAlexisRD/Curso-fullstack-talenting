
// 1. for tradicional 

// Cuándo usarlo: 
// Cuando sabes exactamente cuántas veces quieres repetir algo. 

// Ejemplo: 
// Recorrer los primeros 10 números para mostrarlos o hacer cálculos. 

for (let i = 1; i <= 10; i++) { 

  console.log("Tabla del 2: 2 x " + i + " = " + (2 * i)); 

} 

// Forma 

// 2. while 

// Cuándo usarlo: 
// Cuando no sabes cuántas veces se repetirá, pero hay una condición que debe cumplirse. 

// Ejemplo: 
// Esperar hasta que un número aleatorio sea mayor a 0.9 

let numero; 

while (numero <= 0.9) { 

  numero = Math.random(); 

  console.log("Número generado: " + numero); 

} 



// 3. do...while 

// Cuándo usarlo: 
// Cuando quieres que el bloque se ejecute al menos una vez, sin importar la condición inicial. 

// Ejemplo: 
// Pedir un número hasta que sea mayor que 10 (simulado sin prompt). 

// let numero 

do { 

 let numero = Math.floor(Math.random() * 20); // número aleatorio entre 0 y 19 

  console.log("Número: " + numero); 

} while (numero <= 10); 



// 4. for...of 

// Cuándo usarlo: 
// Cuando trabajas con arrays y necesitas acceder directamente a los valores. 

// Ejemplo: 
// Listar productos en un carrito. 

let carrito = ["Hamburguesa", "Hot Dog", "Tostada"]; 

for (let producto of carrito) { 

  console.log("Producto: " + producto); 

} 



// 5. for...in 

// Cuándo usarlo: 
// Cuando trabajas con objetos y necesitas recorrer sus propiedades. 

// Ejemplo: 
// Mostrar los datos de un cliente. 

let cliente = { 

  nombre: "Alex", 

  ciudad: "Puerto Plata", 

  edad: 28 

}; 

 

for (let clave in cliente) { 

  console.log(clave + ": " + cliente[clave]); 

} 



 
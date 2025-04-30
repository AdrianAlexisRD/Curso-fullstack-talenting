// Las tomas de decisiones en JavaScript son estructuras
//  que permiten que un programa ejecute ciertas acciones dependiendo de condiciones.
//  Es decir, el código elige qué camino seguir según lo que esté ocurriendo. 

// 🧠 ¿Por qué es importante? 

// Porque no todo siempre es lineal. A veces queremos que: 

// Si el usuario es mayor de edad, pueda acceder. 

// Si la contraseña es correcta, se inicie sesión. 

// Si hace calor, mostrar “¡Llévate agua!” 

 

// 🔧 Las estructuras más comunes: 

// 1. if, else if, else 

let edad = 18; 
 
if (edad >= 18) { 
  console.log("Eres mayor de edad"); 
} else { 
  console.log("Eres menor de edad"); 
} 
  
// 2. switch 

let dia = "lunes"; 
 
switch (dia) { 
  case "lunes": 
    console.log("Inicio de semana"); 
    break; 
  case "viernes": 
    console.log("¡Viernes al fin!"); 
    break; 
  default: 
    console.log("Otro día"); 
} 
  
// 3. Operador ternario 

let esAdmin = true; 
let mensaje = esAdmin ? "Acceso permitido" : "Acceso denegado"; 
console.log(mensaje); 
  

 

 
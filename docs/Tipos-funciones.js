/*
# 📚 Tipos de funciones en JavaScript:
## 1. **Función declarada (Declarative Function)**
*/
function saludar() {
  console.log('¡Hola, mundo!');
}


// ## 2. **Función anónima (Anonymous Function)**
// Es una función **sin nombre**, normalmente se guarda en una variable:
const saludar = function() {
   console.log('¡Hola, mundo!');
 };

/*
## 3. **Función flecha (Arrow Function)**

Una forma moderna, más corta y limpia:
 */

const saludar = () => {
  console.log('¡Hola, mundo!');
};


// ✅ Características:
// - No tiene su propio `this`.
// - Es más **rápida** y **moderna**.
// - Ideal para funciones cortitas o callbacks.

// ✅ **Versión aún más corta** si es una sola línea:

const saludar = () => console.log('¡Hola!');



// ## 4. **Funciones como métodos de un objeto**

// Cuando una función está **dentro de un objeto**:


const persona = {
  nombre: "Alex",
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};


// ✅ Características:
// this apunta al objeto.
// ## 5. **Funciones constructoras**

// Se usan para crear **nuevos objetos**:

function Persona(nombre) {
  this.nombre = nombre;
}

const alex = new Persona('Alex');
console.log(alex.nombre); // "Alex"


// ✅ Características:
// - Se usa `this`.
// - Se llaman con `new`.
// - Es como una "plantilla" de objetos.



// ## 6. **Funciones asíncronas (async/await)**

//  Sirven para trabajar con cosas que toman tiempo (como leer archivos):

async function leerArchivo() {
  const data = await fs.readFile('archivo.txt', 'utf8');
  console.log(data);
}
/*
 ✅ Características:
- Deben ir con `async`.
- Usan `await` para esperar tareas que tardan.


 # 🎯 RESUMEN RÁPIDO:

 | Tipo                      | Ejemplo principal                  |
 |----------------------------|-------------------------------------|
 | Declarada                  | `function saludar() {}`             |
 | Anónima                    | `const saludo = function() {}`      |
 | Flecha (Arrow)             | `const saludo = () => {}`           |
 | Método en objeto           | `objeto.metodo = function() {}`     |
 | Constructora               | `function Persona() {}`             |
 | Async/Await                | `async function cargar() {}`        |


 ¿Te gustaría que te hiciera también **un mapa visual** (tipo dibujito) para que lo veas aún más fácil? 🎨🚀  
 ¡Te lo puedo hacer ahora mismo si quieres! 🔥  
 ¿Te animas? */
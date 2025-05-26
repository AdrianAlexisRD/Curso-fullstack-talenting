// Métodos de Cadenas en JavaScript - Resumen con Ejemplos

console.log("=== 📏 Longitud ===");
console.log("Hola".length); // 4

console.log("\n=== 🔠 Mayúsculas y minúsculas ===");
console.log("hola".toUpperCase()); // "HOLA"
console.log("HOLA".toLowerCase()); // "hola"

console.log("\n=== ✂️ Trim ===");
console.log("  hola  ".trim()); // "hola"

console.log("\n=== 🔁 Reemplazo ===");
console.log("hola mundo".replace("mundo", "Alex")); // "hola Alex"
console.log("aaabbb".replaceAll("a", "c")); // "cccbbb"

console.log("\n=== 🔍 Búsqueda ===");
console.log("javascript".includes("script")); // true
console.log("Hola mundo".startsWith("Hola")); // true
console.log("Hola mundo".endsWith("mundo")); // true
console.log("banana".indexOf("a")); // 1
console.log("banana".lastIndexOf("a")); // 5

console.log("\n=== 🔎 Extracción ===");
console.log("javascript".slice(0, 4)); // "java"
console.log("javascript".substring(4, 10)); // "script"
console.log("javascript".substr(4, 6)); // "script" (obsoleto)

console.log("\n=== 🔗 Unión y separación ===");
console.log("uno,dos,tres".split(",")); // ["uno", "dos", "tres"]
console.log("Hola".concat(" ", "Mundo")); // "Hola Mundo"

console.log("\n=== 🔡 Caracteres ===");
console.log("hola".charAt(1)); // "o"
console.log("A".charCodeAt(0)); // 65

console.log("\n=== 🔁 Repetición ===");
console.log("ha".repeat(3)); // "hahaha"

console.log("\n=== ⬅️➡️ Relleno ===");
console.log("5".padStart(3, "0")); // "005"
console.log("5".padEnd(3, "0"));   // "500"

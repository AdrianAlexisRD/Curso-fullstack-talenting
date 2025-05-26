


// const imprimeArray = (arreglo=[]) =>{
//     let resultado = arreglo.filter(elemento=> elemento%2 !== 0 );
//     console.log(resultado)
//     resultado.forEach(x=> console.log(x) )

// }

// imprimeArray([5,4,16,7,8,9])

function longestConsec(strarr) {
  const array = strarr 

return  array.reduce((a, b) =>{return a > b ? a : b});
    // your code
    
}
const array = [4,10,7,3,8,40,35,80]

console.log(longestConsec(array));


const nuemeroMayor = (array)=>{
   let numero = 0;
array.forEach(element => {
   
   if (element > numero){
      numero = element}});
  
   return numero

}

// nuemeroMayor(array)

const op = array.map(e => nuemeroMayor(array)*e )
// console.log(nuemeroMayor(array)^10)
console.log(op)

function capMe(names) {
 
   let nName= names.map(name=> name.toLowerCase())
   let nName1 = nName.map(Text=> Text.charAt(0).toUpperCase()+Text.slice(1))   
   return nName1
 }
 capMe(['KARLY', 'DANIEL', 'KELSEY'])

let numA = null
let numB = null

const evaluar = (e , op)=>{
    console.log(op)
    e.preventDefault()
    const resultado = document.getElementById("resultado")
    const input = document.getElementById("entrada").value
    const formulario = document.querySelector("form")
    numA === null ? numA = input : numB = input ;
    resultado.innerHTML= numA
    if( numA != null && numB != null) {
        resultado.innerHTML= eval((`${(numA)} ${op} ${(numB)}`).trim())
        numB= null
        numA= null
    }
    formulario.reset()
}

const sumar = ()=>{
    evaluar( event, "+")
}
const resta = ()=>{
    evaluar( event, "-")
}
const multi = ()=>{
    evaluar( event, "*")
}
const modulo = ()=>{
    evaluar( event, "%")
}
const expo = ()=>{
    evaluar( event, "**")
    }


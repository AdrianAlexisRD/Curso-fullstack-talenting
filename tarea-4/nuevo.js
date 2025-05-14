const ul = document.querySelector('ul')



const borrarTarea = (e)=>{
    const tarea = e.target.innerText
    console.log(typeof(tarea))
    console.log(tarea)

}
ul.addEventListener('click', borrarTarea)



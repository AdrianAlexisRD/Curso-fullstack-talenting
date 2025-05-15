const input = document.querySelector('#entrada')
const button = document.getElementById('add')
const ul = document.getElementById('conteinerList')
const catidadTareasGuardadas = document.getElementById('cantidad-tarea')
const tareasRealizadas = document.getElementById('tareas-realisadas')
const tareasNoRealizadas =document.getElementById('tareas-no-realizadas')

let data = []

<<<<<<< HEAD
=======
const mainFunction = (input)=>{
button.addEventListener('click', () => {
<<<<<<< HEAD
  let tarea = input.value
  // filtramos si la tearea es valida, si tarea = nada nos tira un alert
  // y si la longitud del STRING es menor a 4 
=======
  const tarea = input.value.trim();
>>>>>>> 5b63fece81fe5281cbecead3462d2ad0dc61eb1a
  if (tarea === "" || tarea.length < 4) {
    alert('coloque una tarea válida')
    return
  }
>>>>>>> e412853c2b8e3b5b2332d093f6bfcec80812c974

function crearLi (tarea){
  const li = document.createElement('li')
  li.classList.add('tarea')
  li.innerHTML = `
    <p>${tarea}</p>
    <div class="conteiner-check-delete">
    <input class="check" type="checkbox">
    <div class="borrar">Delete</div></div>`
<<<<<<< HEAD
  ul.appendChild(li)
=======
  conteinerList.appendChild(li)
<<<<<<< HEAD
  input.value=""
  allList.innerText= count
  actualizarConteo()

})
=======
>>>>>>> e412853c2b8e3b5b2332d093f6bfcec80812c974
  input.value = ""
  
  actualizarConteo()
  almacenarTarea(tarea)
  subrrayarTareaYborrar(li)
} 

const createElement = (input)=>{
button.addEventListener('click', () => {
  const tarea = input.value.trim();
  if (tarea === "" || tarea.length < 4) {
    alert('coloque una tarea válida')
    return
  }
crearLi(tarea)
})};
createElement(input)

// Marcar como checked, subrrayar y borrar tareas
const subrrayarTareaYborrar = (li)=>{
  const checkbox = li.querySelector('.check')
  const borrar = li.querySelector('.borrar')
  const parrafo = li.querySelector('p')
>>>>>>> 5b63fece81fe5281cbecead3462d2ad0dc61eb1a

<<<<<<< HEAD
=======
  const t = li.children[0].innerText
  data.push(t)
  console.log(t)
  console.log(data)
  localStorage.setItem('llave', data )

<<<<<<< HEAD
  let check=0
  let noCheck=count-check
const checkBox = li.querySelector('.check')
console.log(checkBox)
=======
console.log(checkbox)
>>>>>>> e412853c2b8e3b5b2332d093f6bfcec80812c974
// subrrayar o verificar checkbox
    checkbox.addEventListener('click', () => {
    console.log(li)
    parrafo.classList.toggle('subrrayar')
    actualizarConteo()
  });
>>>>>>> 5b63fece81fe5281cbecead3462d2ad0dc61eb1a

  // borramos tarea
  borrar.addEventListener('click', () => {
    console.log(li)
    li.remove()
    actualizarConteo()
  });
}
<<<<<<< HEAD
=======
mainFunction(input)
const desplegarTareas= ()=>{
const tareasGuardadas =localStorage.getItem('llave')
console.log(tareasGuardadas)

<<<<<<< HEAD
  checkBox.addEventListener('click', () => {
    
      let i = 0
      do {
        let elementSu = document.getElementById(`text${i}`)

        if(checkBox[i].checked === true){
          elementSu.style.textDecoration = 'line-through'
          check++
          actualizarConteo()
        }
        if(checkBox[i].checked==false){
          elementSu.style.textDecoration = 'none'
          noCheck++  
        }
        i++
      } while (i < checkBox.length)
        
        actualizarConteo()
        borrarTarea()

      }
  )

    const actualizarConteo= ()=>{
      tareasRealizadas.innerText=check
      tareasNoRealizadas.innerText=noCheck
    }    

const borrarTarea =()=>{
        let b = 0
    do{
      let elementBorra = document.getElementById(`borrar${b}`)
      let eParaBorrar = document.getElementById(`${b}`)
      elementBorra.addEventListener('click', ()=>{
        eParaBorrar.remove()
        count--
        console.log('se borro elemento')
      })}
    while(b<li.length)
    }


=======
}
desplegarTareas()
>>>>>>> e412853c2b8e3b5b2332d093f6bfcec80812c974

// Función para actualizar contadores
const actualizarConteo=()=>{
  const tareas = ul.querySelectorAll('li').length
  const completadas = ul.querySelectorAll('.check:checked').length
  const pendientes = tareas - completadas
  catidadTareasGuardadas.innerText = tareas
  tareasRealizadas.innerText = completadas
  tareasNoRealizadas.innerText = pendientes
}
actualizarConteo()
<<<<<<< HEAD

const almacenarTarea=(tarea)=>{
  const t = {tareasGuardadas : tarea}
  data.push(t)
  console.log(t)
  console.log(data)
  localStorage.setItem('llave', JSON.stringify(data))
}

const desplegarTareas= ()=>{
const tareasGuardadas =JSON.parse(localStorage.getItem('llave'))
imprimirTareasGuardadas(tareasGuardadas)
console.log(tareasGuardadas)}

const imprimirTareasGuardadas=(tareas)=>{
  for (let tarea of tareas){
    console.log(tarea)
    crearLi(tarea.tareasGuardadas)
  }
}
desplegarTareas()
localStorage.clear()
=======
>>>>>>> 5b63fece81fe5281cbecead3462d2ad0dc61eb1a
>>>>>>> e412853c2b8e3b5b2332d093f6bfcec80812c974

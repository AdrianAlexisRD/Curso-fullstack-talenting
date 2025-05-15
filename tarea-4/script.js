const input = document.querySelector('#entrada')
const button = document.getElementById('add')
const ul = document.getElementById('conteinerList')
const catidadTareasGuardadas = document.getElementById('cantidad-tarea')
const tareasRealizadas = document.getElementById('tareas-realisadas')
const tareasNoRealizadas =document.getElementById('tareas-no-realizadas')

let data = []


function crearLi (tarea){
  const li = document.createElement('li')
  li.classList.add('tarea')
  li.innerHTML = `
    <p>${tarea}</p>
    <div class="conteiner-check-delete">
    <input class="check" type="checkbox">
    <div class="borrar">Delete</div></div>`
  ul.appendChild(li)
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

// subrrayar o verificar checkbox
    checkbox.addEventListener('click', () => {
    console.log(li)
    parrafo.classList.toggle('subrrayar')
    actualizarConteo()
  });

  // borramos tarea
  borrar.addEventListener('click', () => {
    console.log(li)
    li.remove()
    actualizarConteo()
  });
}

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
// localStorage.clear()

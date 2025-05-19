const input = document.querySelector('#entrada')
const button = document.getElementById('add')
const ul = document.getElementById('conteinerList')
const catidadTareasGuardadas = document.getElementById('cantidad-tarea')
const tareasRealizadas = document.getElementById('tareas-realisadas')
const tareasNoRealizadas =document.getElementById('tareas-no-realizadas')
const clean = document.getElementById('clean')

let data = []

function crearLi (tarea){
  const li = document.createElement('li')
  li.classList.add('tarea')
  li.innerHTML = tarea
  ul.appendChild(li)
  input.value = ""
  if(li.querySelectorAll('.subrrayar').length==1){
  console.log(li.querySelectorAll('.subrrayar'))
  const checkboxes = li.querySelectorAll('.check');
  checkboxes.forEach(checkbox => {
  checkbox.checked = true;});
  
  }
  actualizarConteo()
  almacenarTarea(li)
  subrrayarTareaYborrar(li)
} 

const createElement = (input)=>{
button.addEventListener('click', () => {
  const tarea = input.value.trim();
  if (tarea === "" || tarea.length < 4) {
    alert('coloque una tarea válida')
    return
  }
  const ahora = new Date();
  const horas = ahora.getHours();
  const minutos = ahora.getMinutes();
  let tareaCreada=`
    <input class="check" type="checkbox">
    <p>${tarea}</p>
    <div class="conteiner-check-delete">
    <p>${horas}:${minutos}</p>
    <div class="borrar"><img src="trash-x.png"></div></div>`
crearLi(tareaCreada)
})};

createElement(input)

// Limpiar localStorage
clean.addEventListener('click', ()=>{
  console.log('se limpio')
  localStorage.clear()})
// Marcar como checked, subrrayar y borrar tareas
const subrrayarTareaYborrar = (li)=>{
  const checkbox = li.querySelector('.check')
  const borrar = li.querySelector('.borrar')
  const parrafo = li.querySelector('p')

// subrrayar o verificar checkbox
    checkbox.addEventListener('click', () => {
    console.log(ul.querySelectorAll('.check:checked'))
    
    parrafo.classList.toggle('subrrayar')
    actualizarConteo()
    almacenarTarea()
  });

  // borramos tarea
  borrar.addEventListener('click', () => {
    li.remove()
    actualizarConteo()
    almacenarTarea()
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

const almacenarTarea=()=>{
  data=[]
  let er = ul.querySelectorAll('li')
  for (const element of er) {
  data.push(element.innerHTML)

}
  localStorage.setItem('llave', JSON.stringify(data))
}

const desplegarTareas= ()=>{
const tareasGuardadas =JSON.parse(localStorage.getItem('llave'))
imprimirTareasGuardadas(tareasGuardadas)
}

const imprimirTareasGuardadas=(tareas)=>{
  for (let tarea of tareas){
    crearLi(tarea)
  }
}
desplegarTareas()
console.log()



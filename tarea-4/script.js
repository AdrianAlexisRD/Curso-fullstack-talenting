const input = document.querySelector('#entrada')
const button = document.getElementById('add')
const conteinerList = document.getElementById('conteinerList')
const catidadTareasGuardadas = document.getElementById('cantidad-tarea')
const tareasRealizadas = document.getElementById('tareas-realisadas')
const tareasNoRealizadas =document.getElementById('tareas-no-realizadas')

let data = []

const mainFunction = (input)=>{
button.addEventListener('click', () => {
  const tarea = input.value.trim();
  if (tarea === "" || tarea.length < 4) {
    alert('coloque una tarea válida')
    return
  }

  
  const li = document.createElement('li')
  li.classList.add('tarea')
  li.innerHTML = `
    <p>${tarea}</p>
    <div class="conteiner-check-delete">
    <input class="check" type="checkbox">
    <div class="borrar">Delete</div></div>`
  conteinerList.appendChild(li)
  input.value = ""
  
  actualizarConteo()
  const checkbox = li.querySelector('.check')
  const borrar = li.querySelector('.borrar')
  const parrafo = li.querySelector('p')

  const t = li.children[0].innerText
  data.push(t)
  console.log(t)
  console.log(data)
  localStorage.setItem('llave', data )

console.log(checkbox)
// subrrayar o verificar checkbox
  checkbox.addEventListener('click', () => {
    parrafo.classList.toggle('subrrayar')
    actualizarConteo()
  });

// borramos tarea
  borrar.addEventListener('click', () => {
    console.log(li)
    li.remove()
    actualizarConteo()
  });
});
}
mainFunction(input)
const desplegarTareas= ()=>{
const tareasGuardadas =localStorage.getItem('llave')
console.log(tareasGuardadas)

}
desplegarTareas()

// Función para actualizar contadores
const actualizarConteo=()=>{
  const tareas = conteinerList.querySelectorAll('li')
  const completadas = conteinerList.querySelectorAll('.check:checked').length
  const pendientes = tareas.length - completadas
  catidadTareasGuardadas.innerText = tareas.length
  tareasRealizadas.innerText = completadas
  tareasNoRealizadas.innerText = pendientes
}
actualizarConteo()

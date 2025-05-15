const input = document.querySelector('#entrada')
const button = document.getElementById('add')
const conteinerList = document.getElementById('conteinerList')
const catidadTareasGuardadas = document.getElementById('cantidad-tarea')
const tareasRealizadas = document.getElementById('tareas-realisadas')
const tareasNoRealizadas =document.getElementById('tareas-no-realizadas')

let data = []

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

  
  const li = document.createElement('li')
  li.classList.add('tarea')
  li.innerHTML = `
    <p>${tarea}</p>
    <div class="conteiner-check-delete">
    <input class="check" type="checkbox">
    <div class="borrar">Delete</div></div>`
  conteinerList.appendChild(li)
<<<<<<< HEAD
  input.value=""
  allList.innerText= count
  actualizarConteo()

})
=======
  input.value = ""
  
  actualizarConteo()
  const checkbox = li.querySelector('.check')
  const borrar = li.querySelector('.borrar')
  const parrafo = li.querySelector('p')
>>>>>>> 5b63fece81fe5281cbecead3462d2ad0dc61eb1a

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
// subrrayar o verificar checkbox
  checkbox.addEventListener('click', () => {
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
});
}
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
>>>>>>> 5b63fece81fe5281cbecead3462d2ad0dc61eb1a

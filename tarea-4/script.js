const input = document.querySelector('#entrada')
const button = document.getElementById('add')
const conteinerList = document.getElementById('conteinerList')
const allList = document.getElementById('cantidad-tarea')
const tareasRealizadas = document.getElementById('tareas-realisadas')
const tareasNoRealizadas =document.getElementById('tareas-no-realizadas')

// Crear tarea
let count = 0

button.addEventListener('click', () => {
  let tarea = input.value

  // filtramos si la tearea es valida, si tarea = nada nos tira un alert
  // y si la longitud del STRING es menor a 4 
  if (tarea === "" || tarea.length < 4) {
    alert('favor coloque una tarea valida')
    return
  }

  // Se crea el li con su contenido
  let li = document.createElement('li')
  li.classList.add('tarea')
  li.id = count
  li.innerHTML = `<p id="text${count}">${tarea}</p><div class="conteiner-check-delete"><input class="check" 
  type="checkbox" id="${count}"><div class="borrar" id="borrar${count}">Delete</div></div>`
  count++
  // se agrega una nueva tarea
  conteinerList.appendChild(li)
  input.value=""




//cuando damos click en 
  li.addEventListener('click', () => {
    let check=0
    let noCheck= 0

    const actualizarConteo= ()=>{
      tareasRealizadas.innerText=check
      tareasNoRealizadas.innerText=noCheck
    }    

    const validarCheck = () => {
    const checkBox = document.querySelectorAll('.check')
    

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
        actualizarConteo()
        i++
        
      } while (i < checkBox.length)
      

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

    validarCheck()
    borrarTarea()
  })
  allList.innerText= count
})

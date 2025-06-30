const mostrar = document.getElementById('mostrar');
const buscar = document.getElementById('buscar');
<<<<<<< HEAD
const ubicacion = document.getElementById('iconU');
const ulHitorial = document.querySelector('#ulHitorial');
const ulFavorito = document.getElementById('ulFavorito')
const cambiarParametros= document.getElementById('change')
const favorito = document.querySelector('#favorito');
let simbolo = '°C'
let ciudadesBuscadas= []
let nombresFavoritos= new Set()
let dataSave = {}

//aqui hacemos la peticion con el fecth a la api que tenemos
const clima = async (busqueda) => {
const key ='78bdaae64f8c484781913247252405'

  const url = `https://api.weatherapi.com/v1/forecast.json?q=${busqueda}&key=${key}&lang=es&days=5` ;
  try{
      const response = await fetch(url)
      const data = await response.json()
        const {name}= data.location
=======
const ubicacion = document.getElementById('ubicacion');
const ul = document.querySelector('ul');
const cambiarParametros= document.getElementById('change')
let simbolo = '°C'
let unidad = 'metric'



let ciudadesBuscadas= []
//aqui hacemos la peticion con el fecth a la api que tenemos
const clima = async (busqueda,latLon) => {
const key ='78bdaae64f8c484781913247252405'
const city = document.getElementById('city').value.trim();

let consulta = `q=${busqueda}`
  if(city){
    consulta = `q=${city}`
  } else if(latLon){
    consulta = latLon }
 
  const url = `http://api.weatherapi.com/v1/forecast.json?${consulta}&key=${key}&lang=es&days=5` ;
  try{
      const response = await fetch(url)
      const data = await response.json()
      // const {}= data.current.
      console.log(data)
     
        const {name}= data.location
        console.log(name)
>>>>>>> b9aa70837a224779c029fa39ece883c152f1679c
        ciudadesBuscadas.push(name)
        localStorage.setItem('lastCity', JSON.stringify(name))
        localStorage.setItem('cities', JSON.stringify(ciudadesBuscadas))
        currentWeather(data)
        weatherNextDay(data)
<<<<<<< HEAD
        dataSave= data
      }catch(error){
      console.log('error al cargar la informacion')}
}
=======

      }
  catch(error){
      console.log('error al cargar la informacion')

 

  }}
>>>>>>> b9aa70837a224779c029fa39ece883c152f1679c


//esta funcion nos ayuda a conseguir la latitud y longitud de una localizacion
// para pasarsela a la api
function obtenerUbicacion() {
<<<<<<< HEAD
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          clima(`${lat},${lon}`)
      }, () => {
          alert("No se pudo obtener tu ubicación.");
      });
  } else {
      alert("Tu navegador no soporta geolocalización.");}
}

//el boton de ubicacion
ubicacion.addEventListener('click', obtenerUbicacion)

//el boton de buscar
buscar.addEventListener('click', ()=>{
const city = document.getElementById('city');
const ciudad = city.value.trim()
  if(ciudad===""){
  alert("por favor coloque una ciudad")
  }else{
  city.value=''
  clima(ciudad)
  }})


//Procesamos la data y optenemos todos los datos que vamos a mostrar
//creamos un div primero para almacenar y mostrar el contenido
const currentWeather =(data)=>{
const {icon,text}= data.current.condition
const {name,country}= data.location
const {feelslike_c,humidity,temp_c,wind_kph}= data.current

  mostrar.innerHTML=`
  <div id="name">
    <div>
      <h2 id='nombreCiudad'>${name}</h2>
      <h2>${country}</h2>
    </div>
    <span id='logoNw' ><i id='logoI' class="bi bi-cloud"></i></span>
  <div id='iconTemp' class="datos">
    <img id="imgClima" src="https:${icon}" alt="Icono del clima">
    <p id="temp">${parseInt(temp_c)}<span id='simbolo'>${simbolo}</span></p>
  </div>
  </div>
  <div class='weather'>
    <h3><i class="bi bi-clouds"></i> Clima</h3>
    <div class="datos"><p>${text}</div>
  </div>
  <div class='weather'>
    <h3><i class="bi bi-moisture"></i> Humedad</h3>
    <div class="datos"><p>${humidity}%</p></div>
  </div>
  <div class='weather'>
    <h3><i class="bi bi-wind"></i> Velocidad del viento</h3>
    <div class="datos"><p>${wind_kph}Km/h</p></div>
  </div>
  <div class='weather'>
    <h3><i class="bi bi-thermometer-high"></i> Sensacion termica</h3>
    <div class="datos"><p id="feelLike">${parseInt(feelslike_c)}${simbolo}</p></div>
=======
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        
        console.log(`q=${lat},${lon}`)
        clima(undefined,`q=${lat},${lon}`)

    }, () => {
        alert("No se pudo obtener tu ubicación.");
    });
} else {
    alert("Tu navegador no soporta geolocalización.");
}}

//los botones de ubicacion
ubicacion.addEventListener('click', obtenerUbicacion)
buscar.addEventListener('click', ()=>{
  if(city.value===""){
  alert("por favor coloque una ciudad")
  }else{
  clima()
  city.value=''
  }})

//Procesamos la data y optenemos todos los datos que vamos a mostrar
//creamos un div primero para almacenar y mostrar el contenido
const currentWeather =(data)=>{

const {icon,text}= data.current.condition
const {name,country}= data.location
const {feelslike_c,feelslike_f,humidity,temp_c,temp_f,wind_kph}= data.current

//aqui tenemos el boton para cambiar el tipo de unidad que queremos utilizar 
cambiarParametros.addEventListener('click',()=>{
  const temp =document.getElementById('temp')
  const feelLike =document.getElementById('feelLike')
  const tempNext =document.querySelectorAll('.tempNext')
  let i = 1
if(simbolo=='°C'){
  simbolo= '°F'
  temp.innerText= `${parseInt(temp_f)} ${simbolo}`
  feelLike.innerText= `${parseInt(feelslike_f)} ${simbolo}`
  
  tempNext.forEach(e=>{
    e.innerText=`Avg ${parseInt(data.forecast.forecastday[i].day.avgtemp_f)} ${simbolo}`
    i++
  })
}else{
  simbolo= '°C'
  temp.innerText= `${parseInt(temp_c)}${simbolo}`
  feelLike.innerText= `${parseInt(feelslike_c)}${simbolo}`
  tempNext.forEach(p=>{
    p.innerText=`Avg ${parseInt(data.forecast.forecastday[i].day.avgtemp_c)} ${simbolo}`
    i++
  })
}

})

  mostrar.innerHTML=`
<span id='logoNw' ><i id='logoI' class="bi bi-cloud"></i></span>
  <div id="name">
    <img id="imgClima" src="https:${icon}" alt="Icono del clima">
    <h2>${name}<br><br>${country}</h2>
  </div>
  <div class='weather'>
    <h3>Temperatura actual</h3>
    <div class="datos"><i class="bi bi-thermometer-half"></i><p id="temp">${parseInt(temp_c)}${simbolo}</p></div>
  </div>
  <div class='weather'>
    <h3>Descricion del clima</h3>
    <div class="datos"><p>${text}</div>
  </div>
  <div class='weather'>
    <h3>Humedad</h3>
    <div class="datos"><i class="bi bi-moisture"></i><p>${humidity}%</p></div>
  </div>
  <div class='weather'>
    <h3>Velocidad del viento</h3>
    <div class="datos"><i class="bi bi-wind"></i><p>${wind_kph}Km/h</p></div>
  </div>
  <div class='weather'>
    <h3>Sensacion termica</h3>
    <div class="datos"><i class="bi bi-thermometer-high"></i><p id="feelLike">${parseInt(feelslike_c)}${simbolo}</p></div>
    </div>
  `
}

//esta funcion recupera el historial de las ciudades buscadas guardado en local storage 
//esta funcion recupera el historial de ciudades buscadas guardados en local storage 
const historialDeBusqueda= ()=>{
  const historial =JSON.parse(localStorage.getItem('cities'))
  for (const ciudad of historial) {
    const li= document.createElement('li')
    li.classList.add('liHistorial')
    li.innerHTML=`${ciudad}`
      ulHitorial.appendChild(li)
  }
  ulHitorial.addEventListener('click', (e)=>{
    clima(e.target.innerText)
  })
    ul.appendChild(li)
  }
}

//recuperamos la ultima ciudad buscada 
const ultimaBusqueda = ()=>{
  const busqueda =JSON.parse(localStorage.getItem('lastCity'))
  clima(busqueda)
}


// con esta funcion guardamos los nombres de las ciudades en favorito
function guardarFavoritos(city){
  city?nombresFavoritos.add(city): console.log('ciudad es igual a nada')
  localStorage.setItem('favoritos', JSON.stringify([...nombresFavoritos]))
}
//recuperamos las ciudades guardadas
const nombresGuadados =()=>{
  const favoritosGuadados =JSON.parse(localStorage.getItem('favoritos'))
  console.log(favoritosGuadados)
  console.log(typeof(favoritosGuadados))
  console.log(favoritosGuadados.length)
      favoritosGuadados.forEach(favorito => {
      nombresFavoritos.add(favorito)
      console.log("aqui funciona")
      mostrarFavorito()

    })}
function mostrarFavorito(){
  ulFavorito.innerHTML=""
    nombresFavoritos.forEach(favorito=>{
      const li= document.createElement('li')
      li.classList.add('liFavorito')
      li.innerHTML=`<div id='favoritoDiv'><i class="bi bi-star-fill iconFavoritos"></i><p>${favorito}</p></div><i class="bi bi-x-circle-fill borrar"></i></i>`
      ulFavorito.appendChild(li)
    })
}
//evento para guardar favoritos
favorito.addEventListener('click', ()=>{
  let city = document.getElementById('nombreCiudad').innerText
  console.log(city)
  guardarFavoritos(city)
  nombresGuadados()

  }
)
//con este evento podemos borrar o buscar una ciudad en favoritos
ulFavorito.addEventListener('click', (e)=>{
  const  elemento = e.target
  const nombreF =elemento.childNodes[0]
  console.log(elemento.parentNode.children[0].innerText)
  console.log(nombreF)    
  if (elemento.innerText){
    clima(elemento.innerText)
  }else{
    elemento.parentNode.remove()
    nombresFavoritos.delete(elemento.parentNode.children[0].innerText)
    guardarFavoritos()

  }}
)
//cambiamos estilos

const btnToggle = document.getElementById('cambiarBg')
btnToggle.addEventListener('click', ()=>{
  let body=document.querySelector('body')
  let cambiarStilo = document.documentElement.style


  body.classList.toggle('oscuro')
 
  if (btnToggle.classList.contains('bi-toggle-on')) {
    btnToggle.classList.replace('bi-toggle-on', 'bi-toggle-off');
  } else {
    btnToggle.classList.replace('bi-toggle-off', 'bi-toggle-on');
  }
  if(body.classList[0]=='oscuro'){
    console.log(document.querySelector('body').classList[0])
      cambiarStilo.setProperty(`--colorBg`, '#0E2148')
      cambiarStilo.setProperty(`--colorTema1`, '#fff')
      cambiarStilo.setProperty(`--colorTema2`, '#fff')
  }else{
      cambiarStilo.setProperty(`--colorBg`, '#fff')
      cambiarStilo.setProperty(`--colorTema1`, '#0E2148')
      cambiarStilo.setProperty(`--colorTema2`, '#14131a')
  }}
)
//conseguimos los datos de los proximos dias 
const weatherNextDay = (data)=>{
const body = document.querySelector('.conteinerWN')
const {forecastday}= data.forecast
  }else{
      cambiarStilo.setProperty(`--colorBg`, '#fff')
      cambiarStilo.setProperty(`--colorTema1`, '#0E2148')
  }

})

const weatherNextDay = (data)=>{
const body = document.querySelector('.conteinerWN')
const {forecastday}= data.forecast
console.log(forecastday)
body.innerHTML=""
const fecha = new Date()
const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];


for (let i = 1; i < forecastday.length; i++) {
  const element = forecastday[i];
  const diaNombre = diasSemana[(fecha.getDay() + i) % 7];
  const div = document.createElement('div')
    div.classList.add('wetherNext')
    div.id=`card${i}`
for (let index = 1; index < forecastday.length; index++) {
  const element = forecastday[index];
  const diaNombre = diasSemana[`${fecha.getDay()+index%(7-fecha.getDay())}`];
  console.log(diaNombre);
  const div = document.createElement('div')
    div.classList.add('wetherNext')
    div.innerHTML= `
    
    <div class="conteinerFecha">
      <img class="imgClima" src="https:${element.day.condition.icon}" alt="Icono del clima">
      <h3>${diaNombre}</h3>
    </div>
    <div class="conteinerTemp">          

      <p class='pText'>${element.day.condition.text}</p>
      <p ><i class="bi bi-moisture"> </i>${element.day.avghumidity}%</p>
      <p class="tempNext"><i class="bi bi-thermometer-half"> </i> ${parseInt(element.day.avgtemp_c)}${simbolo}</p>
    </div> 
      ` 
    body.appendChild(div)}}


//aqui tenemos el boton para cambiar el tipo de unidad que queremos utilizar 
const cambiarSimbolos = ()=>{
    const {feelslike_c,feelslike_f,temp_c,temp_f}= dataSave.current
    let i = 1
    const temp =document.getElementById('temp')
    const feelLike =document.getElementById('feelLike')
    const tempNext =document.querySelectorAll('.tempNext')
  if(simbolo==='°C'){
    simbolo= '°F'
    temp.innerHTML= `${parseInt(temp_f)} <span id='simbolo'>${simbolo}</span>`
    feelLike.innerText= `${parseInt(feelslike_f)} ${simbolo}`
    tempNext.forEach(temp=>{
      temp.innerText=`Avg ${parseInt(dataSave.forecast.forecastday[i].day.avgtemp_f)} ${simbolo}`
      i++
      return
    })
  }else{
    simbolo= '°C'
    temp.innerHTML= `${parseInt(temp_c)}<span id='simbolo'>${simbolo}</span>`
    feelLike.innerText= `${parseInt(feelslike_c)}${simbolo}`
    tempNext.forEach(p=>{
      p.innerText=`Avg ${parseInt(dataSave.forecast.forecastday[i].day.avgtemp_c)} ${simbolo}`
      i++
  })}
}
cambiarParametros.addEventListener('click', cambiarSimbolos)
    // localStorage.clear()
ultimaBusqueda()
historialDeBusqueda()
nombresGuadados()
      <p>${element.day.condition.text}</p>
      <p class="tempNext">Avg ${element.day.avgtemp_c}${simbolo}</p>
    </div> 
      ` 
    body.appendChild(div)
    
}
}


ultimaBusqueda()
historialDeBusqueda()



const mostrar = document.getElementById('mostrar');
const buscar = document.getElementById('buscar');
const ubicacion = document.getElementById('ubicacion');
const ul = document.querySelector('ul');
const cambiarParametros= document.getElementById('change')
let simbolo = '°C'



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
        ciudadesBuscadas.push(name)
        localStorage.setItem('lastCity', JSON.stringify(name))
        localStorage.setItem('cities', JSON.stringify(ciudadesBuscadas))
        currentWeather(data)
        weatherNextDay(data)

      }
  catch(error){
      console.log('error al cargar la informacion')

 

  }}


//esta funcion nos ayuda a conseguir la latitud y longitud de una localizacion
// para pasarsela a la api
function obtenerUbicacion() {
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
  temp.innerHTML= `${parseInt(temp_f)} <span id='simbolo'>${simbolo}</span>`
  feelLike.innerText= `${parseInt(feelslike_f)} ${simbolo}`
  
  tempNext.forEach(temp=>{
    temp.innerText=`Avg ${parseInt(data.forecast.forecastday[i].day.avgtemp_f)} ${simbolo}`
    i++
  })
}else{
  simbolo= '°C'
  temp.innerHTML= `${parseInt(temp_c)}<span id='simbolo'>${simbolo}</span>`
  feelLike.innerHTML= `${parseInt(feelslike_c)}${simbolo}`
  tempNext.forEach(p=>{
    p.innerText=`Avg ${parseInt(data.forecast.forecastday[i].day.avgtemp_c)} ${simbolo}`
    i++
  })
}

})

  mostrar.innerHTML=`
  <div id="name">
    <img id="imgClima" src="https:${icon}" alt="Icono del clima">
    <h2>${name}<br><br>${country}</h2>
    <span id='logoNw' ><i id='logoI' class="bi bi-cloud"></i></span>
  <div class="datos"><p id="temp">${parseInt(temp_c)}<span id='simbolo'>${simbolo}</span></p></div>

  </div>
  <div class='weather'>
    <h3><i class="bi bi-clouds"></i> Descricion del clima</h3>
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
    </div>
  `
}

//esta funcion recupera el historial de ciudades buscadas guardados en local storage 
const historialDeBusqueda= ()=>{
  const historial =JSON.parse(localStorage.getItem('cities'))
  for (const ciudad of historial) {
    const li= document.createElement('li')
    li.classList.add('liHistorial')
    li.innerHTML=`${ciudad}`
    ul.appendChild(li)
  }
}

//recuperamos la ultima ciudad buscada 
const ultimaBusqueda = ()=>{
  const busqueda =JSON.parse(localStorage.getItem('lastCity'))
  clima(busqueda)
}

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
    body.appendChild(div)
    
}}
ultimaBusqueda()
historialDeBusqueda()



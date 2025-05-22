const mostrar = document.getElementById('mostrar');
const buscar = document.getElementById('buscar');
const ubicacion = document.getElementById('ubicacion');
const ul = document.querySelector('ul');
const key = 'c0b72fe99b6039fa538260e9c114602e';


let ciudadesBuscadas= []

const clima = async (busqueda,latLon) => {
const city = document.getElementById('city').value.trim();
const parametros = 'metric'

let consulta = `q=${busqueda}`
  if(city){
    consulta = `q=${city}`
  } else if(latLon){
    consulta = latLon 
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?${consulta}&appid=${key}&units=${parametros}&lang=es`;
  try{
      const response = await fetch(url)
      const data = await response.json()
      if(data.cod=== 200){
        ciudadesBuscadas.push(data.name)
        localStorage.setItem('lastCity', JSON.stringify(data.name))
        localStorage.setItem('cities', JSON.stringify(ciudadesBuscadas))
        crearDiv(data)
      }else{
        alert(`ciudad no encontrada`)
      }}
  catch(error){
      console.log('error al cargar la informacion')
  }
}

function obtenerUbicacion() {
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        
        console.log(`${lat} y ${lon}`)
        clima(undefined,`lat=${lat}&lon=${lon}`)

    }, () => {
        alert("No se pudo obtener tu ubicación.");
    });
} else {
    alert("Tu navegador no soporta geolocalización.");
}
}


ubicacion.addEventListener('click', obtenerUbicacion)

buscar.addEventListener('click', ()=>{
  if(city.value===""){
  alert("por favor coloque una ciudad")
  }else{
  clima()
  city.value=''
  }
})

const crearDiv =(data)=>{
  mostrar.innerHTML=`
  <div id="name">
    <img id="imgClima" src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Icono del clima">
    <h2>${data.name} ${data.sys.country}</h2>
  </div>
  <div class='weather'>
    <h3>Temperatura actual</h3>
    <div class="datos"><i class="bi bi-thermometer-half"></i><p>${data.main.temp}°C</p></div>
  </div>
  <div class='weather'>
    <h3>Descricion del clima</h3>
    <div class="datos"><p>${data.weather[0].description}</div>
  </div>
  <div class='weather'>
    <h3>Humedad</h3>
    <div class="datos"><i class="bi bi-moisture"></i><p>${data.main.humidity}%</p></div>
  </div>
  <div class='weather'>
    <h3>Velocidad del viento</h3>
    <div class="datos"><i class="bi bi-wind"></i><p>${data.wind.speed}Km/h</p></div>
  </div>
  <div class='weather'>
    <h3>Sensacion termica</h3>
    <div class="datos"><i class="bi bi-thermometer-high"></i><p>${data.main.feels_like}°C</p></div>
    </div>
  `
}

const historialDeBusqueda= ()=>{
  const historial =JSON.parse(localStorage.getItem('cities'))
  console.log(typeof(historial))
  for (const ciudad of historial) {
      const li= document.createElement('li')
    li.innerHTML=`${ciudad}`
    
    ul.appendChild(li)
  }
}


const ultimaBusqueda = ()=>{
  const busqueda =JSON.parse(localStorage.getItem('lastCity'))
console.log(busqueda)
  clima(busqueda)
}

ultimaBusqueda()
historialDeBusqueda()
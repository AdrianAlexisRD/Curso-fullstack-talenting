
let n = 1; 
const aplicarTema = () => {
  const colorA = ['#EBD3F8', '#AD49E1', '#7A1CAC', '#2E073F']
  const colorB = ['#F5EEDD','#7AE2CF','#077A7D', '#06202B']
  const colorC = ['#FFDEDE', '#FF0B55', '#CF0F47', '#000000']
  const colorD = ['#EEEEEE', '#FFD369', '#393E46', '#222831']
  const colorE = ['#A5D7E8', '#576CBC', '#19376D', '#0B2447']

  // let anterior = null;

  // function aleatorio(min, max) {
  //   let nuevo;
  //   do {
  //     nuevo = Math.floor(Math.random() * (max - min + 1)) + min;
  //   } while (nuevo === anterior);
  //   anterior = nuevo;
  //   return nuevo;
  // }
  // Inicializa fuera de la función para mantener su valor entre llamadas

  const escalado = () => { n = n % 5 + 1; return n; };
  
    
  let propiedadesCss= document.documentElement.style

switch(escalado().toString()){
  case"1":
  colorA.forEach((color, index) => {
    propiedadesCss.setProperty(`--color-${index + 1}`, color);
    console.log("A")
  })
  
  break

  case"2":
  colorB.forEach((color, index) => {
    propiedadesCss.setProperty(`--color-${index + 1}`, color);
    console.log("B")
  })
  break

  case"3":
  colorC.forEach((color, index) => {
    propiedadesCss.setProperty(`--color-${index + 1}`, color);
    console.log("C")
  })
  break

  case"4":
  colorD.forEach((color, index) => {
    propiedadesCss.setProperty(`--color-${index + 1}`, color);
    console.log("D")
  })
  break
  case"5":
  colorE.forEach((color, index) => {
    propiedadesCss.setProperty(`--color-${index + 1}`, color);
    console.log("E")
  })
  break
}

};

const cambioColor = () => {
  const botonColor = document.getElementById('botonColor');

  botonColor.addEventListener('click', () => {
    aplicarTema();
  });
};

// Aplicar el tema cuando cargue la página
cambioColor();




// manipulamos el DOM para tener acceso a la propiedades hojas donde se va a añadir el nuevo contenido
const hoja1 = document.getElementById('hoja1');
const hoja2 = document.getElementById('hoja2');
const hoja3 = document.getElementById('hoja3');
const hoja4 = document.getElementById('hoja4');

const contenido1 = document.getElementById('contenido1')
const contenido2 = document.getElementById('contenido2')
const contenido3 = document.getElementById('contenido3')
const contenido4 = document.getElementById('contenido4')

hoja1.addEventListener('click', () => {
    const mensaje = `
        <h3>Deportes</h3>
        <p>Soy un amante del deporte en todas sus formas, pero hay cuatro que me apasionan de verdad: el
        béisbol, el rallycross, el baloncesto y el atletismo. Cada uno me inspira de una manera diferente,
        me conecta con la adrenalina, la disciplina y ese espíritu competitivo que me impulsa día tras día.
        Para mí, el deporte no es solo entretenimiento, es una forma de vida.</p>
    `
    aparecer(hoja1, contenido1, mensaje)
})

hoja2.addEventListener('click', () => {
    const mensaje = `
        <h3>Entretenimiento</h3>
        <p>Para mí, los videojuegos son una vía de escape del día a día. Me permiten explorar mundos increíbles,
        vivir historias únicas y desconectarme de la rutina mientras disfruto, aprendo y me reto a mí mismo.
        </p>`
    aparecer(hoja2, contenido2, mensaje)
})

hoja3.addEventListener('click', () => {
    const mensaje = `
        <h3>Progracion</h3>
        <p>
        Soy técnico eléctrico de profesión, pero mi camino en la programación comenzó gracias a un amigo muy cercano que ya estaba metido en este mundo.
        Desde entonces, me atrapó la idea de que con una computadora no hay límites: todo lo que imagines, puedes crearlo.
        </p>`;
    aparecer(hoja3, contenido3, mensaje);
});

hoja4.addEventListener('click', () => {
    const mensaje = `
        <h3>Musica</h3>
        <p>
        Me encantan todos los géneros musicales, desde el rock hasta el merengue.
        Creo que cada uno tiene su momento, y disfruto la música en cualquier situación, sin importar el estilo.
        </p>`;
    aparecer(hoja4, contenido4, mensaje);
});


const aparecer = (hoja, contenido, mensaje) => {

    contenido.classList.add('oculto'); setTimeout(() => {
        hoja.innerHTML = mensaje
    }, 1000);
}





    

// let n = localStorage.getItem('temaActual')
//   ? parseInt(localStorage.getItem('temaActual'))
//   : 0;

// const aplicarTema = () => {
//   const temas = [
//     ['#EBD3F8', '#AD49E1', '#7A1CAC', '#2E073F'],
//     ['#F5EEDD', '#7AE2CF', '#077A7D', '#06202B'],
//     ['#FFDEDE', '#FF0B55', '#CF0F47', '#000000'],
//     ['#EEEEEE', '#FFD369', '#393E46', '#222831'],
//     ['#A5D7E8', '#576CBC', '#19376D', '#0B2447']
//   ];

//   // Cicla de 0 a 4
//   n = (n + 1) % temas.length;
//   localStorage.setItem('temaActual', n);

//   let propiedadesCss = document.documentElement.style;

//   temas[n].forEach((color, i) => {
//     propiedadesCss.setProperty(`--color-${i + 1}`, color);
//   });

//   console.log(`Tema actual: ${n}`);
// };

// const cambioColor = () => {
//   const botonColor = document.getElementById('botonColor');
//   botonColor.addEventListener('click', aplicarTema);
// };
// 
// // Aplica el tema guardado al cargar
// aplicarTema();
// cambioColor();

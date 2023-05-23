'use strict';
/* Funcionamiento del boton de agregar pistas (clonador) */
const agregarBtn = document.getElementById('agregar');
const contenedor = document.getElementById('contenedor');
const clonable = document.querySelector('.clonar');
const canciones = []
agregarBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const clon = clonable.cloneNode(true);
  const inputsClonados = clon.querySelectorAll('.input');



  inputsClonados.forEach((input) => {
	canciones.push(input.value);
    input.value = '';
  });
  contenedor.insertAdjacentElement('beforebegin', clon);
//   const ocultoBtn = document.getElementById('oculto');
//   ocultoBtn.classList.add('hidden');
});

let discos= []

function crearListaHTML(arrayObjetos) {
	let listaHTML = document.createElement("ul");
  
	if (Array.isArray(arrayObjetos)) {
	  arrayObjetos.forEach((objeto) => {
		let elementoLi = document.createElement("li");
		elementoLi.textContent = JSON.stringify(objeto);
		listaHTML.appendChild(elementoLi);
	  });
	} else if (typeof arrayObjetos === "object" && arrayObjetos !== null) {
	  Object.keys(arrayObjetos).forEach((key) => {
		let elementoLi = document.createElement("li");
		elementoLi.textContent = key;
		elementoLi.appendChild(crearListaHTML(arrayObjetos[key]));
		listaHTML.appendChild(elementoLi);
	  });
	}
  
	return listaHTML;
  }
  

  
	function Cargar(e) {
	e.preventDefault();
	
	let nombre = document.getElementById("nombre").value;
	let autor = document.getElementById("autor").value;
	let codigo = document.getElementById("codigo").value;
	let pistas = [];
	
	let pistaElements = document.getElementsByClassName("pista");
	for (let i = 0; i < pistaElements.length; i++) {
		let pistaElement = pistaElements[i];
		let pista = pistaElement.getElementsByTagName("input")[0].value;
		let duracion = pistaElement.getElementsByTagName("input")[1].value;
			let pistaData = {
				pista: pista,
				duracion: duracion
			};
		pistas.push(pistaData);
	}
	
	let disco = {
		nombre: nombre,
		autor: autor,
		codigo: codigo,
		pistas: pistas,
	}
	discos.push(disco);

	document.getElementById("formulario").reset();
	const contenedor = document.getElementById("contenedor");
	contenedor.replaceChildren()
	
	
	let resultadoDiv = document.getElementById("resultado");
	resultadoDiv.innerHTML = `
	${crearListaHTML(discos).innerHTML}
	`;
}  



/* Cambio de imagenes del reproductor */



/* Reproductor funcionalidad */

// const audioPlayer = document.getElementById("audio-player");
// const playBtn = document.getElementById("play-btn");
// const pauseBtn = document.getElementById("pause-btn");
// const prevBtn = document.getElementById("prev-btn");
// const nextBtn = document.getElementById("next-btn");

// const songs = [
// 	{
// 		title: "Canción 1",
// 		image: "https://example.com/song1-image.jpg",
// 		audio: "https://example.com/song1.mp3"
// 	},
// 	{
// 		title: "Canción 2",
// 		image: "https://example.com/song2-image.jpg",
// 		audio: "https://example.com/song2.mp3"
// 	},
// 	{
// 		title: "Canción 3",
// 		image: "https://example.com/song3-image.jpg",
// 		audio: "https://example.com/song3.mp3"
// 	}
// ];

// let currentSongIndex = 0;

// function loadSong() {
// 	audioPlayer.src = songs[currentSongIndex].audio;
// }

// function playSong() {
// 	audioPlayer.play();
// }

// function pauseSong() {
// 	audioPlayer.pause();
// }

// function prevSong() {
// 	currentSongIndex--;
// 	if (currentSongIndex < 0) {
// 		currentSongIndex = songs.length - 1;
// 	}
// 	loadSong();
// 	playSong();
// }

// function nextSong() {
// 	currentSongIndex++;
// 	if (currentSongIndex >= songs.length) {
// 		currentSongIndex = 0;
// 	}
// 	loadSong();
// 	playSong();
// }

// playBtn.addEventListener("click", playSong);
// pauseBtn.addEventListener("click", pauseSong);
// prevBtn.addEventListener("click", prevSong);
// nextBtn.addEventListener("click", nextSong);

// loadSong();





/*
 * SUEIRO, FLORENCIA | APELLIDO, NOMBRE
 */




// Discos:
// let discos = [];

// Función Cargar:

// const Cargar = () => {
	
    // Cositas:

	// let disco = {
	// 	Nombre: 'El lado oscuro de la Programación',
	// 	Autor: 'Los Programadores Anónimos',
	// 	Codigo: 1,
	// 	Pistas: [
	// 		{
	// 			Nombre: 'Esa cajita loca llamada letiablecita',
	// 			Duracion: 200,
	// 		},
	// 		{
	// 			Nombre: 'Nunca quise ser un NaN',
	// 			Duracion: 180,
	// 		},
	// 		{
	// 			Nombre: 'No quiero programar',
	// 			Duracion: 90,
	// 		},
	// 		{
	// 			Nombre: 'Bajo presión',
	// 			Duracion: 240,
	// 		},
	// 		{
	// 			Nombre: 'La odisea de las letiables privadas',
	// 			Duracion: 120,
	// 		},
	// 		{
	// 			Nombre: 'Sr. Programador',
	// 			Duracion: 720,
	// 		},
	// 	],
	// };
// let disco = new Object();


// 	let nombre = document.getElementById('nombre').value;
// 	let autor = document.getElementById('autor').value;
// 	let codigo = document.getElementById('codigo').value;
// 	let pista = document.getElementById('pista').value;
// 	let duracion = document.getElementById('duracion').value;



	// let elementoLista = document.createElement('li');
	// elementoLista.textContent = 'Nombre: ' + nombre + ', Autor: ' + autor + ', Código: ' + codigo + ', Pista: ' + pista + ', Duración: ' + duracion;
	

// 	alert("this");

// };
	


// // Función Mostrar:
// const Mostrar = () => {
//     // letiable para ir armando la cadena:
//     let html = '';

//     // Cositas:

//     // Si modificaste el nombre de la letiable para ir armando la cadena, también hacelo acá:
//     // document.getElementById('info').innerHTML = html; // <--- ahí es acá
// };

// Todas las funciones que necesites:






// Aca empieza mi codigo funcional




// Obtener referencia al botón de envío

// Agregar evento de escucha al botón de envío
// agregarBtn.addEventListener('click', function(event) {
//   event.preventDefault(); // Evitar el envío del formulario

  
//   let listaElementos = document.getElementById('elementosDevueltos');
  
//   // Obtener los valores del disco



 
//   // Agregar el elemento <li> a la lista <ul>
//   listaElementos.appendChild(elementoLista);
  
//   // Limpiar los campos de entrada si es necesario
//   document.getElementById('nombre').value = '';
//   document.getElementById('autor').value = '';
//   document.getElementById('codigo').value = '';
//   document.getElementById('pista').value = '';
//   document.getElementById('duracion').value = '';


// });


// devolver los elementos


  // Crear un elemento <li> para cada elemento capturado


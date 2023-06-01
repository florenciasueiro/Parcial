'use strict';

const agregarBtn = document.getElementById('agregar');
const cargarBtn = document.getElementById('btn');

const discos = []
let pistas = [];
const codigo = document.getElementById('codigo');
const span = document.getElementById('alert');
let contador = 0;

$("#pista, #duracion, #verMas").on("keydown", (e) => {
	if (e.keyCode === 13) {
		$("#nuevoItem").click()
		$("#pista").val("")
		$("#duracion").val("")
		$("#searchInput").val("")
	}
})

$("#titleInput").on("keydown", (e) => {
	if (e.keyCode == 13) {
		$("#titleInput").blur();
	}
})

function mostrarTodo(pistas){
	let datos = [0,0];
	//1 = max
	//0 = total
	pistas.forEach(pista => {
		if (pista.duracionEnSeg > datos[1]){
		datos[1] = pista.duracionEnSeg;
	}
	datos[0] += pista.duracionEnSeg;
}
)
return datos}


function animateElement(elementId) {
	const element = $(elementId);
	gsap.to(element, 0.1, { x: -4 });
	gsap.to(element, 0.1, { delay: 0.1, x: 4 });
	gsap.to(element, 0.1, { delay: 0.2, x: -4 });
	gsap.to(element, 0.1, { delay: 0.3, x: 4 });
	gsap.to(element, 0.1, { delay: 0.4, x: 0 });
  }
  

  $("#verMas").on("click", (e) => {  
	if (
	  $("#searchInput").val() == "" ||
	  isNaN($("#searchInput").val()) ||
	  $("#searchInput").val() < 1 ||
	  $("#searchInput").val() > 999 ||
	  !(discos.some(disco => disco.codigo === $("#searchInput").val()))
	) {
	  animateElement("#searchInput");
	  $("#red").text(
		`Debes llenar el campo con un código numérico único, no menor a 1 ni mayor a 999.`
	  );
	} else {

	  const disco = discos.find(disco => disco.codigo === $("#searchInput").val());
	  
		const todo = mostrarTodo(disco.pistas)
	  const pistasHtml = disco.pistas
		.map(pista => {
		  return `
			<div>
			  <a class="linkLista" href="#">
				<div class="listaPista">
				  <p>${pista.nombre}</p>
				  <p>${pista.duracion}</p>
				</div>
			  </a>
			</div>`;
		})
		.join('');
  
	  $(".mostrarContenido").append(`
		<div class="nombrePistas">
		  <div class="junto">
			<p class="info nombre">${disco.nombre} </p>
			<p>(${disco.autor})</p>
		  </div>
		  <i class="fas fa-plus"></i>
		</div>
		<div class="autorCodigo">
		  <span class="pistasCount">${disco.pistas.length} Canciones</span>
		  <p class="info codigo">Código: ${disco.codigo}</p>
		  <p>El disco dura: ${todo[0]}s</p>
		  <p>Su pista más larga dura: ${todo[1]}s</p>
		  <p>El promedio de duración es de: ${todo[0] / disco.pistas.length}s</p>
		</div>
		</div>
		<div class="section-dropdown-sub">
		  ${pistasHtml}
		</div>
	  `);
	}
  });
  


$("#nuevoItem").on("click", (e) => {
	if ($("#pista").val() == "") {
		animateElement("#pista");
		$("#red").text(`Debes llenar el campo de pista`)
	} else if ($("#duracion").val() == "" || isNaN($("#duracion").val()) || $("#duracion").val() < 0 || $("#duracion").val() > 7200) {
		animateElement("#duracion")
		$("#red").text(`Debes llenar el campo de duracion con un numero entre 0 y 7200 (segundos)`)
	} else {
	  const pista = $("#pista").val();
	  const duracion = $("#duracion").val();

	  $("#red").text(``)

	  if (duracion > 180) {
		$("#red").text(`La pista supera los 180 segundos y está en rojo`)
	  }
  
	const duracionEnMinutos = parseInt(duracion);
	const horas = Math.floor(duracionEnMinutos / 60);
	const minutos = duracionEnMinutos % 60;
	const duracionFormateada = ("0" + horas).slice(-2) + ":" + ("0" + minutos).slice(-2);




	  const pistaObj = {
		nombre: pista,
		duracion: duracionFormateada,
		duracionEnSeg: parseInt(duracion)
	  };
  
	  pistas.push(pistaObj);

  
	  $(".item").append(
		`<div class="itemInner">
		  <i class="fa fa-music"></i>
		  <p>Pista: ${pista}</p>
		  <p>Duracion: ${duracionFormateada}</p>
		  <button class="removeItemBtn">
			<i class="fas fa-trash-alt"></i>
		  </button>
		</div>`
	  )
	  
  
	  $("#pista").val("");
	  $("#duracion").val("");
  
	  const newItem = e.target;
  
	  gsap.to(".itemsWrapper, .item", .3, {paddingBottom: 30, ease: Back.easeOut});
	  gsap.to(".itemsWrapper, .item", .3, {delay: .15, paddingBottom: 8, y: 0, ease: Back.easeOut});
	}
  });

  function Cargar(e) {
	if ($("#nombre").val() == "") {
	  animateElement("#nombre");
	  $("#red").text(`Debes llenar el campo de nombre`)
	} else if ($("#autor").val() == "") {
	  animateElement("#autor");
	  $("#red").text(`Debes llenar el campo de autor`)
	} else if ($("#codigo").val() == "" || isNaN($("#codigo").val()) || $("#codigo").val() < 1 || $("#codigo").val() > 999 || discos.some(disco => disco.codigo === $("#codigo").val())) {
	  animateElement("#codigo");
	  $("#red").text(`Debes llenar el con un código numérico único del, no menor a 1, ni mayor a 999.`)
	} else if (pistas.length < 1) {
	  animateElement("#pista");
	  animateElement("#duracion");
	  animateElement("#nuevoItem");
	  $("#red").text(`Debes llenar los campos de pista y duración`)
	} else {
	  const nombre = $("#nombre").val();
	  const autor = $("#autor").val();
	  const codigo = $("#codigo").val();
  
	  $("#red").text(``)
  
	  const disco = {
		nombre: nombre,
		autor: autor,
		codigo: codigo,
		pistas: pistas
	  };
  
	  discos.push(disco);
	  pistas = [];
	  contador++;
	  $("#contador").text(`(${contador})`)
  
	  $("#nombre").val('');
	  $("#autor").val('');
	  $("#codigo").val('');
	  $(".itemInner").remove();
	  $(".section-dropdown").empty();
  
	  discos.forEach(disco => {
		const todo = mostrarTodo(disco.pistas)

		const pistasHtml = disco.pistas
		  .map(pista => {
			return `<div>
			  <a class="linkLista" href="#">
			  <div class="listaPista">
			  <p>${pista.nombre}</p>
			  <p>${pista.duracion}</p>
			  </div>
			  </a>
			</div>`;
		  })
		  .join('');
  
		$(".section-dropdown").append(`
		  <input class="dropdown-sub" type="checkbox" id="dropdown-sub" name="dropdown-sub"/>
			<label id="disco" class="for-dropdown-sub disco infoGrupo" for="dropdown-sub">
			<div class="">
				<div class="nombrePistas">
					<div class="junto">
						<p class="info nombre">${disco.nombre} </p>
						<p>(${disco.autor})</p>
						</div>
						<i class="fas fa-plus"></i>
				</div>
				<div class="autorCodigo">
				<span class="pistasCount">${disco.pistas.length} Canciones</span>
					<p class="info codigo">Código: ${disco.codigo}</p>
					<p>El disco dura: ${todo[0]}s</p>
					<p>Su pista mas larga dura: ${todo[1]}s</p>
					<p>El promedio de duración es de: ${todo[0]/disco.pistas.length}s</p>
				</div>
			</div>
			</label>
			<div class="section-dropdown-sub">
			${pistasHtml}
		  </div>
		`);
	  });
	}
  }
  

  $(".item").on("click", "i.fa-hand-point-right", (e) => {
	const handPoint = e.target
	const completedItem = e.target.parentElement
	const text = completedItem.getElementsByTagName('p')
	
	$(text).css({"text-decoration": "line-through"})
	gsap.to(handPoint, .3, {rotate: -30, transformOrigin: "center", ease: Back.easeOut})
	gsap.to(handPoint, .3, {delay: .15, rotate: 0, transformOrigin: "center", ease: Back.easeOut})
  })
  
  $(".item").on("click", "button.removeItemBtn", (e) => {
	const removeItem = e.target;
	const itemInner = removeItem.parentElement;
	const index = $(itemInner).index();
  
	pistas.splice(index, 1);
  
	$(itemInner).remove();
  
	gsap.to(".itemsWrapper, .item", 0, {paddingBottom: 52});
	gsap.to(".itemsWrapper, .item", .3, {paddingBottom: 8, ease: Back.easeOut});
  });
  
  


  
  gsap.set(".fa-pencil-alt", {opacity: 0, rotate: -180, transformOrigin: "center"})
  gsap.set("#titleInput, #pista, #duracion", {border: "1px solid transparent", boxShadow: "0 0 0 rgba(211, 220, 248, .3)"})
  
  $("#titleInput").on("mouseenter", () => {
	  gsap.to(".fa-pencil-alt", .3, {rotate: 0, opacity: 1, transformOrigin: "center", ease: Back.easeOut})
  })
  
  $("#titleInput").on("mouseleave", () => {
	if ($("#titleInput").is(":focus")) {
	  gsap.to(".fa-pencil-alt", .3, {rotate: 0, opacity: 1, transformOrigin: "center", ease: Back.easeOut})
	} else if (!($("#titleInput").is(":focus"))) {
	  gsap.to(".fa-pencil-alt", .3, {rotate: -180, opacity: 0, transformOrigin: "center", ease: Back.easeOut})
	}
  })
  
  $("#titleInput").on("focus", () => {
	gsap.to(".fa-pencil-alt", .3, {rotate: 0, opacity: 1, transformOrigin: "center", ease: Back.easeOut})
	gsap.to("#titleInput", .3, {border: "1px solid #e7ecfb", boxShadow: "0 0 12px rgba(211, 220, 248, .3)"})
  })
  
  $("#titleInput").on("focusout", () => {
	gsap.to(".fa-pencil-alt", .3, {rotate: -180, opacity: 0, transformOrigin: "center", ease: Back.easeOut})
	gsap.to("#titleInput", .3, {border: "1px solid transparent", boxShadow: "0 0 12px rgba(211, 220, 248, 0)"})
  })
  
  $(".item").on("mouseenter", ".itemInner", (e) => {
	const trashBtn = $(e.target.querySelector(".removeItemBtn"))
	gsap.to(trashBtn, .3, {opacity: 1})
  })
  
  $(".itemInner").on("mouseenter", ".removeItemBtn", (e) => {
	const trashBtn = e.target
	gsap.to(trashBtn, .3, {opacity: 1})
  })
  
  $(".innerItem").on("mouseleave", ".removeItemBtn", (e) => {
	gsap.to(trashBtn, .3, {opacity: 0})
  })
  
  $(".item").on("mouseleave", ".itemInner", (e) => {
	const trashBtn = $(e.target.querySelector(".removeItemBtn"))
	gsap.to(trashBtn, .3, {opacity: 0})
  })
  
  $(".itemInner").on("mouseleave", ".removeItemBtn", (e) => {
	const trashBtn = e.target
	gsap.to(trashBtn, .3, {opacity: 0})
  })
  
  $("#pista").on("focus", () => {
	gsap.to("#pista", .3, {border: "1px solid #e7ecfb", boxShadow: "0 0 12px rgba(211, 220, 248, .3)"})
  })
  
  $("#pista").on("focusout", () => {
	gsap.to("#pista", .3, {border: "1px solid transparent", boxShadow: "0 0 12px rgba(211, 220, 248, 0)"})
  })
  
  $("#nuevoItem").on("mouseenter", () => {
	gsap.to(".mas", .3, {rotate: 90, ease: Back.easeOut})
  })
  
  $("#nuevoItem").on("mouseleave", () => {
	gsap.to(".mas", .3, {rotate: 0, ease: Back.easeOut})
  })



var searchButton = document.getElementById("searchButton");
var searchModal = document.getElementById("searchModal");
var closeModal = document.getElementsByClassName("close")[0];

searchButton.addEventListener("click", function() {
  searchModal.style.display = "block";
});

closeModal.addEventListener("click", function() {
  searchModal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == searchModal) {
    searchModal.style.display = "none";
  }
});

var searchSubmit = document.getElementById("searchSubmit");
var searchInput = document.getElementById("searchInput");



var listButton = document.getElementById("listButton");
var listModal = document.getElementById("listModal");
var closeListModal = document.getElementsByClassName("close")[0];

listButton.addEventListener("click", function() {
  listModal.style.display = "block";
});

closeListModal.addEventListener("click", function() {
  listModal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == listModal) {
    listModal.style.display = "none";
  }
});
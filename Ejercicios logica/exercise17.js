/*
A partir de la página web proporcionada, completar el código JavaScript para que:

Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado
*/

//

//1-traer todos los enlaces y los parrafos
// const enlaces = document.querySelectorAll(".ocultar");
// const parrafos = document.querySelectorAll(".parrafoOcultar");

//2- mostrar o ocultar segun corresponda

// for (let i = 0; i < enlaces.length; i++) {
//   console.log(parrafos[i].style.display === "none");
//   if (parrafos[i].style.display === "none") {
//     console.log("mostrar");
//     mostrar(enlaces[i], parrafos[i]);
//   } else {
//     ocultar(enlaces[i], parrafos[i]);
//   }
// }

// function ocultar(enlace, parrafo) {
//   //3- al presionar el enlace se oculta el texto y cambia el texto del enlace
//   enlace.addEventListener("click", (e) => {
//     e.preventDefault();
//     parrafo.style.display = "none";
//     enlace.innerHTML = "Mostrar contenido";
//   });
// }

// function mostrar(enlace, parrafo) {
//   //3- al presionar el enlace se muetsra el texto y cambia el texto del enlace
//   enlace.addEventListener("click", (e) => {
//     e.preventDefault();
//     parrafo.style.display = "block";
//     enlace.innerHTML = "Ocultar contenido";
//   });
// }


// Traer todos los enlaces y los párrafos
const enlaces = document.querySelectorAll(".ocultar");
const parrafos = document.querySelectorAll(".parrafoOcultar");

// Agregar un solo evento de clic para todos los enlaces
for (let i = 0; i < enlaces.length; i++) {
  enlaces[i].addEventListener("click", function (e) {
    e.preventDefault();
    toggleElementVisibility(enlaces[i], parrafos[i]);
  });
}

function toggleElementVisibility(enlace, parrafo) {
  if (parrafo.style.display === "none" ) {
    mostrar(enlace, parrafo);
  } else {
    ocultar(enlace, parrafo);
  }
}

function ocultar(enlace, parrafo) {
  parrafo.style.display = "none";
  enlace.innerHTML = "Mostrar contenido";
}

function mostrar(enlace, parrafo) {
  parrafo.style.display = "block";
  enlace.innerHTML = "Ocultar contenido";
}


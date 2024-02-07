const reloj = document.getElementById("reloj");
const labelBreak = document.getElementById("break");
const tiempoActivo = 9; //segundos para pruebas rapidas
const tiempoBreak = 4; //segundos para pruebas rapidas
const SEG = 10;
var segundos = SEG; //milisegundos para pruebas rapidas
var swiche = false;
var swicheBreak = false;
const listaTareas = [];

//FUNCIÓN QUE HACE FUNCIONAR EL RELOJ
function conteoReloj(tiempoPomo) {
  //reloj inicial

  var tiempo = tiempoPomo + ":" + segundos;
  reloj.innerHTML = tiempo;
  labelBreak.innerHTML = "En proceso";

  //Mostrar tiempo
  const conteos = setInterval(() => {
    //tiempo inicial
    segundos--;
    tiempo = tiempoPomo + ":" + segundos;

    //hacer que se pare el tiempo si llego a '0' en los minutos
    if (tiempoPomo >= 0) {
      //si se acabaron los milisegundos reiniciar y restar un segundo
      if (segundos <= -1) {
        tiempoPomo--;
        segundos = SEG;
        // Agregar un cero a los milisegundos al llegar a 9
      } else if (segundos <= 9) {
        if (tiempoPomo <= 9) {
          tiempo = "0" + tiempoPomo + ":" + "0" + segundos;
        } else {
          tiempo = tiempoPomo + ":" + "0" + segundos;
        }
        reloj.innerHTML = tiempo;
      } else {
        reloj.innerHTML = tiempo;
      }
    } else {
      labelBreak.innerHTML = "Break";
      labelBreak.style.backgroundColor = "#0050d6";
      labelBreak.style.color = "#fff";
      clearInterval(conteos); //termino pomodoro
      conteoBreak(tiempoBreak);
    }
  }, 100);
  if (swiche) {
  }
}

//FUNCIÓN QUE SE ACTIVA PARA EL BREAK
function conteoBreak(tiempoBreak) {
  //Mostrar tiempo
  const conteo = setInterval(() => {
    //tiempo inicial
    segundos--;
    var tiempoB = tiempoBreak + ":" + segundos;
    //hacer que se pare el tiempo si llego a '0' en los minutos
    if (tiempoBreak >= 0) {
      //si se acabaron los milisegundos reiniciar y restar un segundo
      if (segundos <= -1) {
        tiempoBreak--;
        segundos = SEG;
        // Agregar un cero a los milisegundos al llegar a 9
      } else if (segundos <= 9) {
        if (tiempoBreak <= 9) {
          tiempoB = "0" + tiempoBreak + ":" + "0" + segundos;
        } else {
          tiempoB = tiempoBreak + ":" + "0" + segundos;
        }
        reloj.innerHTML = tiempoB;
      } else {
        reloj.innerHTML = tiempoB;
      }
    } else {
      clearInterval(conteo); //termino pomodoro
      //indico que termino
      swicheBreak = true;
      endTime();
      //reinicio valores
      if (tiempoActivo <= 9) {
        reloj.innerHTML = "0" + tiempoActivo + ":" + SEG;
      } else {
        reloj.innerHTML = tiempoActivo + ":" + SEG;
      }

      labelBreak.innerHTML = "Inicia una tarea";
      labelBreak.style.backgroundColor = "#DAA520";
      labelBreak.style.color = "#000";
    }
  }, 100);
}

//FUNCIÓN PARA ALMACENAR TAREAS
document.getElementById("btnAdd").addEventListener("click", (e) => {
  e.preventDefault();
  //captura de dato ingresado y validación
  const input = document.getElementById("title");
  if (input.value != "" && input.value.length >= 5) {
    //creo objeto task
    let id = GeneraID.GeneraIDUnico();
    const obj = {
      id: id,
      task: input.value,
    };
   
    listaTareas.push(obj);

   
    //listar tareas
    showTask();
    //reiniciar input
    input.value = "";
    //poner foco en el input
    input.focus();
  } else {
    alert("Agrega un tarea de almenos 5 caracteres");
  }
});

//FUNCIÓN PARA LISTAR TAREAS AGREGADAS
function showTask() {
  const containerLista = document.getElementById("contaTask");
  let lista = "";
  let btn = "";
  //reiniciar listado renderizado
  containerLista.innerHTML = "";
  for (const item of listaTareas) {
    //agregar tarea
    lista = document.createElement("li");
    lista.innerHTML = item.task;
    //agregar boton
    //si l atarea ya esta hecha poner hecho y sino mostrar iniciar al renderizar

    btn = document.createElement("button");

    btn.id = "btnStart";
    btn.setAttribute("data-id", item.id);
    btn.innerHTML = "Iniciar";
    lista.appendChild(btn);
    containerLista.appendChild(lista);
    //capturar evento d elos botones y enviar para procesar evento
    btn.addEventListener("click", (e) => {
      //desabilitan todos los botones y cambia testo a en progreso.
      let btns = containerLista.getElementsByTagName("button");
      //cambio texto de boton presionado
      const btnPress = e.target.getAttribute("data-id");
      btns[btnPress].innerHTML = "En proceso";

      //poner en marcha el reloj activo
      conteoReloj(tiempoActivo);
      const btnAdd = document.getElementById("btnAdd");
      btnAdd.disabled = true;
      for (const btn of btns) {
        btn.disabled = true;
      }
    });
  }
}

//FUNCIÓN PARA DETERMINAR SI UNA TAREA SE TERMINO
function endTime() {
  if (swicheBreak) {
    //poner done en tarea realizada
    const lista = document.getElementById("contaTask");
    const btns = lista.getElementsByTagName("button");

    //recorro y determino cual tiene el texto en procesos
    for (const btn of btns) {
      if (btn.textContent === "En proceso") {
        btn.innerHTML = "Hecho!";
        btn.id = "";
        btn.style.backgroundColor = "transparent";
        btn.style.border = "none";
        btn.style.color = "green";
      }
      //habilito los desabilitados menos el ya hecho
      if (btn.textContent !== "Hecho!") {
        btn.disabled = false;
      }
      const btnAdd = document.getElementById("btnAdd");
      btnAdd.disabled = false;
    }
  }
}
//CLASE GENERADORA DE ID
class GeneraID {
  static counter = 0;
  static GeneraIDUnico() {
    return GeneraID.counter++;
  }
}

//funcion para hacer que se listen solo las li que no tengan Hecho!


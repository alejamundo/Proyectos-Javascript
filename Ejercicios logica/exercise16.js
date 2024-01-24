/**
 * Completar el código JavaScript proporcionado para que se añadan nuevos elementos a la lista cada vez que se pulsa sobre el botón. 
 * Utilizar las funciones DOM para crear nuevos nodos y añadirlos a la lista existente. Al igual que sucede en el ejercicio anterior, la acción de pinchar sobre un botón forma parte de los "Eventos" de JavaScript que se ven en el siguiente capítulo. En este ejercicio, sólo se debe saber que al pinchar sobre el botón, se ejecuta la función llamada anade().
 */

const btnAdd=document.getElementById('btnAdd');
btnAdd.addEventListener('click',()=>{
    //capturar el input
    const input =document.getElementById('tarea');
    if (input.value !=='') {
        //creo un nuevo li para la agregar la nueva tarea
        const lista=document.getElementById('lista');
        //creun nuevo elemnto li en html
        const li=document.createElement('li');
        li.innerText=input.value
        lista.appendChild(li);
        //limpio el input
        input.value='';
    }else{
        alert('Ingrese la tarea');
    }
    
})
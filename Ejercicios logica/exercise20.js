/**
 * Construir un validador para un formulario de registro que, dado el HTML que se proporciona, valide cada uno de los campos cuando el usuario ha terminado de introducir datos en cada uno de ellos, es decir, al perder el foco. Si el campo no cumple las restricciones, se mostrará una alerta al usuario, pero se le permitirá seguir introduciendo datos en el resto de campos.

En el momento en el que el usuario envíe el formulario (evento submit), se validarán todos los campos y el formulario no se enviará si alguno de los campos no es válido. Las restricciones a cumplir son las siguientes:

El nombre, email y comentarios son campos obligatorios.
El campo email debe ser una dirección de email válida.
El texto introducido en el campo de comentarios no debe exceder los 50 caracteres.
El password debe tener una longitud mínima de 6 caracteres, y contener al menos una letra minúscula, una letra mayúscula y un dígito.
 */
const form=document.getElementById('formulario');

document.addEventListener('DOMContentLoaded', function () {
    // Función para validar el campo de email
    function validarEmail(email) {
        // Utilizando una expresión regular para verificar el formato del email
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Función para validar el campo de password
    function validarPassword(password) {
        // La contraseña debe tener al menos 6 caracteres, una letra minúscula, una letra mayúscula y un dígito
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);
    }

    // Función para validar los campos del formulario al perder el foco
    function validarCampo(event) {
        var input = event.target;
        var valor = input.value.trim();
        var mensajeError = "";

        switch (input.name) {
            case "nombre":
            case "email":
            case "comentarios":
                if (valor === "") {
                    mensajeError = "Este campo es obligatorio";
                }
                break;
            case "email":
                if (!validarEmail(valor)) {
                    mensajeError = "Ingresa una dirección de email válida";
                }
                break;
            case "comentarios":
                if (valor.length > 50) {
                    mensajeError = "Los comentarios no deben exceder los 50 caracteres";
                }
                break;
            case "password":
                if (!validarPassword(valor)) {
                    mensajeError = "La contraseña debe tener al menos 6 caracteres, una letra minúscula, una letra mayúscula y un dígito";
                }
                break;
        }

        if (mensajeError !== "") {
            alert(mensajeError);
        }
    }

    // Función para validar todos los campos del formulario antes de enviarlo
    function validarFormulario(event) {
        var form = event.target;
        var campos = form.elements;

        for (var i = 0; i < campos.length; i++) {
            if (campos[i].type !== "submit" && campos[i].type !== "reset") {
                validarCampo({ target: campos[i] }); // Llamamos a la función de validación para cada campo
            }
        }

        // Agregar aquí lógica adicional si es necesario antes de enviar el formulario
    }

    // Agregar escuchadores de eventos a los campos del formulario
    form.addEventListener('blur', validarCampo, true);
    form.addEventListener('submit', validarFormulario);
});


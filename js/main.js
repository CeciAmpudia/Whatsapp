(function(){
    // Variables
    var lista = document.getElementById("panel-body"),
        inputMsj = document.getElementById("inputMsj"),
        btnEnviar = document.getElementById("btn-enviar");

    // Funciones
    var enviarMensaje = function(){
        var mensaje = inputMsj.value,
            nuevoMensaje = document.createElement("div"),
            nombre = document.createElement("p"),
            mensajeText = document.createElement("p"),
            hora = document.createElement("h6"),
            contenido = document.createTextNode(mensaje);

    /*    if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
            tareaInput.className = "error";
            return false;
        }   */

        // Agregamos el contenido al enlace
        mensajeText.appendChild(contenido);
        
        nombre.setAttribute("class", "text-pink");
        // Le establecemos un atributo href
        // enlace.setAttribute("href", "#");
        //Agregamos checkbox
        nuevoMensaje.appendChild(mensajeText);
        nuevoMensaje.setAttribute("class", "bg-white")
        nuevoMensaje.appendChild(nombre);
        nuevoMensaje.appendChild(hora);
        // nuevaTarea.setAttribute("type","checkbox");
        // Agrergamos el enlace (a) a la nueva tarea (li)
        // nuevoMensaje.appendChild(mensaje);
        // Agregamos la nueva tarea a la lista
        lista.appendChild(nuevoMensaje);

        inputMsj.value = "";

        //
        for (var i = 0; i <= lista.children.length -1; i++) {
            mensaje[i].addEventListener("click", function(){
                this.parentNode.removeChild(this);
            });
        }

    };
    var comprobarInput = function(){
        inputMsj.className = "";
        inputMsj.setAttribute("placeholder", "Escribe tu mensaje aqui");
    };

    var eleminarTarea = function(){
        this.parentNode.removeChild(this);
    };

    // Eventos

    // Agregar Tarea
    btnEnviar.addEventListener("click", enviarMensaje);

    // Comprobar Input
    inputMsj.addEventListener("click", comprobarInput);
}());
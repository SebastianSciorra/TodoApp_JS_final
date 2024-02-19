const espacioInput = document.getElementById("espacio-input");
const listaContenedor = document.getElementById("lista-ul");
const botonAgregar = document.querySelector(".boton-agregar");
const mensajeError = document.getElementById("mensaje-error");

/* Función para agregar una tarea a la lista, previamente validando si el campo de entrada está vacío  */
function agregarTarea() {
    if(espacioInput.value === ''){
        mensajeError.textContent = "Por favor ingresá una tarea";
    }
    else{
        mensajeError.textContent = "";
        let li = document.createElement("li");
        li.innerHTML = espacioInput.value;
        listaContenedor.appendChild(li); 
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
            Toastify({
                text: "¡Tarea agregada!",
                duration: 2000,
                gravity: "top",
                backgroundColor: "#4CAF50",
                }).showToast();
    }
    espacioInput.value = "";
    guardarDatos();
}

/* Evento para el botón agregar, para llamar a la función agregarTarea */
botonAgregar.addEventListener("click", agregarTarea);

/* Evento para el boton "x" o marcar/desmarcar a los items de la lista */
listaContenedor.addEventListener("click", function (e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        guardarDatos();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        guardarDatos();
    }
},false);

/* Función para guardar la lista de tareas en el almacenamiento local */
function guardarDatos(){
    localStorage.setItem("datos", listaContenedor.innerHTML);
}
/* Función para mostrar  la lista de tareas del almacenamiento local al cargar la página*/
function mostrarTareas(){
    listaContenedor.innerHTML = localStorage.getItem("datos");
}
/* Llamar a la función mostrarTareas al cargar la página para restaurar las tareas anteriores */
mostrarTareas();  
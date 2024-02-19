/* Función para mostrar una notificación en el catch */
function mostrarNotificacion(mensaje) {
    Toastify({
        text: mensaje,
        duration: 3000, 
        gravity: "top", 
        backgroundColor: "#4CAF50", 
    }).showToast();
}
/* Función para obtener una imagen aleatoria de Lorem Picsum y cambiar el fondo de la app */
async function cambiarFondo() {
    try {
        const response = await fetch('https://picsum.photos/1920/1080');
        if (!response.ok) {
            throw new Error('No se pudo obtener la imagen del servidor');
        }
        const imageUrl = response.url;
        document.body.style.backgroundImage = `url(${imageUrl})`;
    } catch (error) {
        mostrarNotificacion('Hubo un problema al cargar la imagen. Por favor, inténtalo de nuevo más tarde.');
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = '#153677'; 
    }
  }
/* Llamar a la función cambiarFondo al cargar la página */
cambiarFondo();

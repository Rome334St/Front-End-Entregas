document.addEventListener("DOMContentLoaded", function() {
    const cerrarSesionBtn = document.querySelector("#cerrarSesion");

    if (cerrarSesionBtn) {
        cerrarSesionBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Evitar que el enlace navegue a "#"

            // Eliminar la información del usuario logueado del localStorage
            localStorage.removeItem("usuarioLogueado");

            // Redirigir al usuario a la página de inicio de sesión
            window.location.href = "LogIn.html";
        });
    }
});
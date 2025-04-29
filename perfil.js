document.addEventListener("DOMContentLoaded", function() {
    const infoPerfilDiv = document.querySelector("#infoPerfilUsuario");
    const mensajeNoLogueadoDiv = document.querySelector("#mensajeNoLogueado");

    if (infoPerfilDiv && mensajeNoLogueadoDiv) {
        const usuarioLogueadoString = localStorage.getItem("usuarioLogueado");
        if (usuarioLogueadoString) {
            const usuarioLogueado = JSON.parse(usuarioLogueadoString);

            document.querySelector("#nombreCompletoPerfil").textContent = usuarioLogueado.nombreCompleto || "No disponible";
            document.querySelector("#nacimientoPerfil").textContent = usuarioLogueado.nacimiento || "No disponible";
            document.querySelector("#correoPerfil").textContent = usuarioLogueado.correo || "No disponible";
            document.querySelector("#nacionalidadPerfil").textContent = usuarioLogueado.nacionalidad || "No disponible";
            document.querySelector("#generoPerfil").textContent = usuarioLogueado.genero || "No disponible";

            infoPerfilDiv.style.display = "block";
            mensajeNoLogueadoDiv.style.display = "none";
        } else {
            infoPerfilDiv.style.display = "none";
            mensajeNoLogueadoDiv.style.display = "block";
        }
    }
});

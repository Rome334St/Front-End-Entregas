document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#formLogin");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const correoIngresado = document.querySelector("#Email").value.trim();
            const passwordIngresado = document.querySelector("#LogContraseña").value.trim();

            if (correoIngresado === "" || passwordIngresado === "") {
                alert("Todos los campos son obligatorios.");
                return;
            }

            const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

            const usuarioEncontrado = usuarios.find(u => u.correo === correoIngresado && u.password === passwordIngresado);

            if (usuarioEncontrado) {
                localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioEncontrado));
                console.log("Usuario logueado guardado:", JSON.parse(localStorage.getItem("usuarioLogueado")));
                alert(`Bienvenido, ${usuarioEncontrado.nombreCompleto}`);
                window.location.href = "miPerfil.html";
            } else {
                alert("Correo o contraseña incorrectos.");
            }
        });
    }
});


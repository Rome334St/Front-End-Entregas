document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#registroForm");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const nombreCompleto = document.querySelector("#NombreCompleto").value.trim();
            const nacimiento = document.querySelector("#Nacimiento").value;
            const correo = document.querySelector("#emailregistro").value.trim();
            const nacionalidad = document.querySelector("#Nacionalidad").value;
            const genero = document.querySelector('input[name="genero"]:checked').value;
            const password = document.querySelector("#Contraseña").value.trim();
            const confirmarContra = document.querySelector("#confirmarContra").value.trim();

            if (nombreCompleto === "" || nacimiento === "" || correo === "" || nacionalidad === "" || !genero || password === "" || confirmarContra === "") {
                alert("Todos los campos son obligatorios.");
                return;
            }

            if (password !== confirmarContra) {
                alert("Las contraseñas no coinciden.");
                return;
            }

            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

            const existe = usuarios.find(u => u.correo === correo);
            if (existe) {
                alert("Este correo ya está registrado.");
                return;
            }

            const nuevoUsuario = {
                nombreCompleto: nombreCompleto,
                nacimiento: nacimiento,
                correo: correo,
                nacionalidad: nacionalidad,
                genero: genero,
                password: password
            };

            usuarios.push(nuevoUsuario);

            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            alert("Registro exitoso.");
            window.location.href = "LogIn.html";
        });
    }
});
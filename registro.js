const form = document.querySelector("form");
form.addEventListener("submit", function(e){
    const Contraseña = document.getElementById("Contraseña").value;
    const confirmarContra = document.getElementById("confirmarContra").value;

    if(Contraseña!=confirmarContra){
        e.preventDefault();
        alert("Las contraseñas no coinciden")
    }
});
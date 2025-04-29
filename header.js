window.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector(".navbar-brand");
    if (logo) {
        logo.addEventListener("click", function() {
            window.location.href = "Home.html";
        });
    }

    const miPerfilLink = document.querySelector('a[href="miPerfil.html"]');
    if (miPerfilLink) {
        miPerfilLink.addEventListener("click", function(event) {
            const usuarioLogueado = localStorage.getItem("usuarioLogueado");
            if (!usuarioLogueado) {
                event.preventDefault();
                window.location.href = "LogIn.html";
            }
        });
    }
});

  
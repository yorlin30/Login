
document.addEventListener("DOMContentLoaded", () => {

    const path = window.location.pathname;

    if(path.includes("registro")) {
        document.getElementById("form-registro").addEventListener("submit", e => {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correo").value.trim();
            const clave = document.getElementById("clave").value;

            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

            if (usuarios.find(u => u.correo === correo)){
                document.getElementById("msg").textContent = "Este correo ya está registrado";
                return;
            }

            usuarios.push({ nombre, correo, clave});
            localStorage.setItem("usuarios",JSON.stringify(usuarios));
            document.getElementById("msg").textContent = "Registro exitoso. Puedes iniciar sesión";
            document.getElementById("form-registro").reset();
        });
    }

    if (path.includes("index")) { 
        document.getElementById("form-login").addEventListener("submit", e => {
            e.preventDefault();

            const correo = document.getElementById("correo").value.trim();
            const clave = document.getElementById("clave").value;

            const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
            const usuario = usuarios.find( u => u.correo === correo && u.clave === clave);

            if(usuario){
                document.getElementById("msg").textContent = `¡Bienvenido, ${usuario.nombre}!`;
                
            } else{
                document.getElementById("msg").textContent = "Correo o contraseña incorrectos";
            }
        });
    }

});

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const email = document.getElementById("email");
const enviar = document.getElementById("enviar");

form.addEventListener('submit', e => {
    e.preventDefault();
    validainputs();
});

function validainputs() {
    const nombreval = nombre.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const password2val = password2.value.trim();

    var errorf = 0;
    if (nombreval === "") {
        onErrorform(nombre, "Usuario no puede estar vacio");
        errorf = 1;
    } else {
        exitosform(nombre);
    }
    if (emailval === "") {
        onErrorform(email, "No se puede dejar E-mail en blanco");
        errorf = 1;
    } else if (!valEmail(emailval)) {
        onErrorform(email, "Email no valido");
        errorf = 1;
    } else {
        exitosform(email);
    }
    if (passwordval === "") {
        onErrorform(password, "No se puede dejar en blanco");
        errorf = 1;
    } else if (!valPassword(passwordval)) {
        onErrorform(password, "Contraseña no válida");
        errorf = 1;
    } else {
        exitosform(password);
    }
    if (password2val === "") {
        onErrorform(password2, "No se puede dejar en blanco");
        errorf = 1;
    } else if (passwordval !== password2val) {
        onErrorform(password2, "Error, Contraseñas no coinciden");
        errorf = 1;
    } else {
        exitosform(password2);
    }

    if (errorf == 0) {
        enviar.addEventListener('click', function () {
            alert('Enviando datos de formulario...');
            window.location.reload();
        })
    }
    return false;
}

function onErrorform(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "ValControl error";
    small.innerText = message;
}

function exitosform(input) {
    const formControl = input.parentElement;
    formControl.className = "ValControl success";
}

function valEmail(email) {
    return /^[a-z0-9_\.-]+@[a-z\.-]+\.[a-z\.]{2,6}$/.test(email);
}

function valPassword(password) {
    return /^[a-zA-z0-9_-]{6,15}$/.test(password);
}
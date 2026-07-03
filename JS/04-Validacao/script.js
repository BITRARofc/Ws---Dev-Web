const formulario = document.getElementById("formulario");
const name = document.getElementById("name");
const error = document.getElementById("error");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    if(name.value === "") {
        error.textContent = "Por favor preencha um nome";
        error.style.color = "red";
    } else {
        error.textContent = "Formulário enviado com sucesso!"
        error.style.backgroundColor = "green";
        error.style.color = "white";
    }
});
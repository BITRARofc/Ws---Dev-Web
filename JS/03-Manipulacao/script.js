const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");
const botao = document.getElementById("botao");

botao.addEventListener("click", function(){
    titulo.textContent = "Título alterado";
    titulo.style.color = "navy";

    texto.textContent = "Texto alterado";
    texto.style.backgroundColor = "coral";
    texto.style.color = "white";
})
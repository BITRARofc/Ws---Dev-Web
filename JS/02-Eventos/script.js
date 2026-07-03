function mensagem() {
  document.getElementById("mensagem").textContent = "Você clicou no botão usando onclick";
}

const botao = document.getElementById("botaoEvento");

// botao.addEventListener("click", function() {
//   document.getElementById("mensagem").textContent = "Você clicou no botão usando addEventListener";
// });

function mensagemAddEventListener() {
  document.getElementById("mensagem").textContent = "Você clicou no botão usando addEventListener";
}

botao.addEventListener("click", mensagemAddEventListener)

let carrinho = [];

const produtos = [
    {
        id: 1,
        nome: "Mouse",
        preco: 49.90,
        descricao: "Mouse super fodelastico com luzinha",
        imagem: "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?q=80&w=1074",
    },
    {
        id: 2,
        nome: "Teclado",
        preco: 159.90,
        descricao: "Teclado com barulinho foda",
        imagem: "https://images.unsplash.com/photo-1763136469657-d4e9aea1522f?q=80&w=1170",
    },
    {
        id: 3,
        nome: "Monitor",
        preco: 959.9,
        descricao: "Monitor mega blaster gigantosférico",
        imagem: "https://images.unsplash.com/photo-1551645120-d70bfe84c826?q=80&w=735&auto=format",
    }
];

const produtosSelect = document.getElementById("produto");
const preview = document.getElementById("preview");
const quantidadeInput = document.getElementById("quantidade");
const carrinhoElemento = document.getElementById("carrinho");
const totalCarrinho = document.getElementById("total-valor");
const modal = document.getElementById("modalProduto");

function abrirModal(){
    modal.showModal();
}

function fecharModal(){
    modal.Close();
}

function carregarProdutos() {
    produtosSelect.innerHTML = "";
    
    produtos.forEach((produto) => {
        const option = document.createElement("option");
        option.value = produto.id;
        option.textContent = produto.nome;
        produtosSelect.appendChild(option);
    });
    mostrarPreview();
}

function pegarProduto() {
    const id = Number(produtosSelect.value);
    return produtos.find((produtos) => produtos.id === id);
}

function mostrarPreview() {
    const produtos = pegarProduto();

    if (!produtos) {
        preview.innerHTML = "<p>Nenhum produto selecionado</p>"
        return;
    } else {
        preview.innerHTML = `
        <div class="info-imagem">
            <img src="${produtos.imagem}" alt="${produtos.nome}" />
        </div>
        <div class="preview-dados">
            <h3>${produtos.nome}</h3>
            <p>${produtos.descricao}</p>
            <p class="dados-price">${formatarMoeda(produtos.preco)  }</p>
        </div>
        `
    }
}


function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
} 

function adicionarProduto() {
    const produtos = pegarProduto();
    const quantidade = Number(quantidadeInput.value);
    const itemExistente = carrinho.find(item => item.id === produtos.id);

    if (!produtos || quantidade < 1) {
        alert("Selecione um produto e uma quantidade válida")
        return;
    }

    if (itemExistente) {
        itemExistente.quantidade += quantidade;
      } else {
        carrinho.push({
          id: produtos.id,
          quantidade: quantidade
        });
      }

      quantidadeInput.value = 1;
      mostrarCarrinho()
}

function mostrarCarrinho() {
    carrinhoElemento.innerHTML = "";
    if (carrinho.length === 0) {
        carrinhoElemento.innerHTML = "<p>Carrinho Vazio</p>"
        totalCarrinho.innerHTML = formatarMoeda(0);
        return;
    }
    let total = 0;

  carrinho.forEach((item) => {
    const produto = produtos.find((produto) => produto.id === item.id);

    if (!produto) return;

    const subtotal = produto.preco * item.quantidade;
    total += subtotal;

    //Criar div para o HTML div carrinho

    const div = document.createElement("div");
    div.className = "carrinho-item";

    div.innerHTML = `
            <div class="item-imagem">
            <img src="${produto.imagem}" alt="${produto.nome}" />
          </div>
          <div class="item-dados">
            <h3>${produto.nome}</h3>
            <p>${formatarMoeda(produto.preco)}</p>

            <div class="item-quantidade">
              <button class="quantidade-remover" onclick="alterarQuantidade(${produto.id}, -1)">-</button>
              <p>${item.quantidade}</p>
              <button class="quantidade-adicionar" onclick="alterarQuantidade(${produto.id}, 1)">+</button>
            </div>
          </div>

          <div class="item-subtotal">
            <p>${formatarMoeda(subtotal)}</p>
            <br /><br />
            <button onclick="removerItem(${produto.id})">Remover</button>
          </div>
  `;
    carrinhoElemento.appendChild(div);
  });
  
  totalCarrinho.textContent = formatarMoeda(total);
}

function alterarQuantidade(id, valor) {
    const item = carrinho.find(item => item.id === id)

    if(!item) return;

    item.quantidade += valor

    if (item.quantidade <= 0) {
        carrinho = carrinho.filter(item => item.id !== id)
    }

    mostrarCarrinho();
}

function removerItem(id) {
    carrinho = carrinho.filter(item => item.id !== id); 
  
    mostrarCarrinho();
}

function limparCarrinho() {
    carrinho = [];
    mostrarCarrinho();
}


carregarProdutos();
mostrarCarrinho();
produtosSelect.addEventListener("change", mostrarPreview);

function salvarProduto() {
    const nome = document.getElementById("novoNome").value.trim();
    const preco = Number(document.getElementById("novoPreco").value);
    const descricao = document.getElementById("novaDescricao").value.trim();
    const imagem = document.getElementById("novaImagem").value.trim();

    if (!nome || !preco || !descricao || !imagem) {
        alert("Preencha todos os campos.");
        return;
    }

    const novoProduto = {
        id: Date.now(),
        nome: nome,
        preco: preco,
        descricao: descricao,
        imagem: imagem
    };

    produtos.push(novoProduto);

    document.getElementById("novoNome").value = "";
    document.getElementById("novoPreco").value = "";
    document.getElementById("novaDescricao").value = "";
    document.getElementById("novaImagem").value = "";

    carregarProdutos();
    fecharModal();
}
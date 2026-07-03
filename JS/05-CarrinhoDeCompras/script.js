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

function carregarProdutos() {
    produtosSelect.innerHTML = "";
    
    produtos.forEach(produtos => {
        const option = document.createElement("option");
        option.value = produtos.id;
        option.textContent = produtos.nome;
        produtosSelect.appendChild(option);
    });
}

carregarProdutos();
let precoProduto = 0;
let frete = 0;

// Abre o produto selecionado
function abrirProduto(id) {
    const produto = produtos[id];
    if (!produto) return alert("Produto não encontrado!");

    precoProduto = produto.preco;

    document.getElementById("nome-produto").textContent = produto.nome;
    document.getElementById("preco-produto").textContent = `R$ ${produto.preco.toFixed(2)}`;
    document.getElementById("imagem-produto").src = produto.imagem;
    document.getElementById("descricao-produto").textContent = produto.descricao;

    atualizarTotal();
}

// Calcula frete (Interior SP R$10, Capital SP R$15)
function calcularFrete() {
    const cep = document.getElementById("cep").value.replace(/\D/g, '');
    if (cep.length !== 8) return alert("Digite um CEP válido (8 números).");

    if (cep.startsWith("0") || cep.startsWith("1")) frete = 15; // Capital SP
    else frete = 10; // Interior SP

    document.getElementById("frete-valor").textContent = `Frete: R$ ${frete.toFixed(2)}`;
    atualizarTotal();
}

function atualizarTotal() {
    const total = precoProduto + frete;
    document.getElementById("total-valor").textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Pagar via Mercado Pago Pix
async function pagar() {
    const nomeProduto = document.getElementById("nome-produto").textContent;
    const total = precoProduto + frete;

    const response = await fetch("/criar_pagamento", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({produto: nomeProduto, preco: precoProduto, frete: frete})
    });

    const data = await response.json();
    window.location.href = data.init_point;
}
function abrirProduto(idProduto) {
    // Redireciona para produto.html passando o id do produto na URL
    window.location.href = `produto.html?id=${idProduto}`;
}
function comprarProduto(id) {

    const p = produtos[id];

    const url = `pagamento.html?nome=${encodeURIComponent(p.nome)}
    &preco=${encodeURIComponent(p.preco)}
    &desc=${encodeURIComponent(p.descricao)}
    &img=${encodeURIComponent(p.imagem)}`;

    window.location.href = url;
}

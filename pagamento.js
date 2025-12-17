// Recebe dados do produto pela URL
const params = new URLSearchParams(window.location.search);
const nome = params.get("nome") || "Produto";
const preco = params.get("preco") || "0,00";
const desc = params.get("desc") || "Sem descrição.";
const img = params.get("img") || "img/qrcode-pix.png";

// Preenche na página
document.getElementById("produto-nome").innerText = nome;
document.getElementById("produto-preco").innerText = "R$ " + preco;
document.getElementById("produto-descricao").innerText = desc;
document.getElementById("produto-imagem").src = img;


// ======================================================
// PIX COPIA E COLA
// ======================================================
function gerarPix(valor, chave, nomeLoja) {
    return `
Chave Pix: ${chave}
Valor: R$ ${valor}
Recebedor: ${nomeLoja}
Produto: ${nome}
`.trim();
}

const chavePix = "voxlabimpressora3d@gmail.com";
const nomeLoja = "VoxLab 3D";
const valor = preco.replace(",", ".");

document.getElementById("codigo-pix").value = gerarPix(valor, chavePix, nomeLoja);

function copiarPix() {
    navigator.clipboard.writeText(document.getElementById("codigo-pix").value);
    alert("Código PIX copiado!");
}

function confirmarPagamento() {
    window.location.href = "https://instagram.com/voxlab3d";
}
document.getElementById("btn-confirmar").addEventListener("click", confirmarPagamento);

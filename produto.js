// OBJETO DE PRODUTOS
const produtos = {
    // ===== CHAVEIROS =====
    "chaveiro-letra": {nome:"Chaveiro Letra", preco:15, imagem:"img/letra.jpg", descricao:"Chaveiros com letras personalizadas, escolha a inicial."},
    "chaveiro-gamer": {nome:"Chaveiro Gamer", preco:18, imagem:"img/chaveiro gamer.jpg", descricao:"Modelo perfeito para fãs de videogame."},
    "chaveiro-nossa-senhora": {nome:"Chaveiro Nossa Senhora", preco:15, imagem:"img/chaveiroNossaSenhora.jpg", descricao:"Chaveiro delicado e religioso, muito procurado."},
    "chaveiro-coracao": {nome:"Chaveiro Coração", preco:20, imagem:"img/coracao.jpg", descricao:"Chaveiro fofo em forma de coração."},
    "chaveiro-peixinho": {nome:"Chaveiro Peixinho", preco:18, imagem:"img/peixe.jpg", descricao:"Chaveiro delicado em forma de peixinho."},
    "chaveiro-banguela": {nome:"Chaveiro Banguela", preco:22, imagem:"img/chaveiroBanguela.jpg", descricao:"Chaveiro do dragão Banguela."},
    "chaveiro-furia-luz": {nome:"Chaveiro Fúria da Luz", preco:25, imagem:"img/chaveiroFuriaDaLuz.jpg", descricao:"Chaveiro do dragão Fúria da Luz."},
    "chaveiro-academia": {nome:"Chaveiro Academia", preco:20, imagem:"img/academia.png", descricao:"Chaveiro para os amantes de academia."},

    "chaveiro-pokebola": {nome:"Chaveiro Pokébola", preco:20, imagem:"img/pokebola.jpg", descricao:"Chaveiro Pokébola impresso em 3D."},
    "chaveiro-antistress": {nome:"Chaveiro Antistress", preco:22, imagem:"img/antistress.jpg", descricao:"Chaveiro antistress articulado."},
    "chaveiro-polvo": {nome:"Chaveiro Polvo", preco:25, imagem:"img/polvo.jpg", descricao:"Chaveiro polvo articulado."},
    "chaveiro-cachorrinho": {nome:"Chaveiro Cachorrinho", preco:22, imagem:"img/chaveiroCachorro.jpg", descricao:"Chaveiro cachorrinho articulado."},
    "chaveiro-emote": {nome:"Chaveiro de Emote", preco:18, imagem:"img/chaveiroEmote.jpg", descricao:"Chaveiro de emote personalizado."},
    "chaveiro-esmalte": {nome:"Chaveiro Esmalte", preco:18, imagem:"img/esmalte.jpg", descricao:"Chaveiro formato esmalte."},
    "chaveiro-hollow-knight": {nome:"Chaveiro Hollow Knight", preco:25, imagem:"img/hollow.jpg", descricao:"Chaveiro personagem Hollow Knight."},
    "chaveiro-polaroid": {nome:"Chaveiro Polaroid", preco:20, imagem:"img/polaroid.jpg", descricao:"Chaveiro estilo polaroid personalizado."},

    // ===== LETREIROS =====
    "letreiro-te-amo": {nome:'Letreiro "Te Amo"', preco:40, imagem:"img/Letreito.jpg", descricao:"Letreiro fofo ideal para presentes e decoração."},
    "letreiro-personalizado": {nome:"Letreiro com Nome", preco:55, imagem:"img/letreiroNome.jpg", descricao:"Faça um letreiro totalmente personalizado com seu nome."},

    // ===== JOGOS =====
    "jogo-equilibrio": {nome:"Jogo de Equilíbrio", preco:30, imagem:"img/jogo equilibrio.jpg", descricao:"Brinquedo educativo para desenvolver coordenação."},
    "jogo-velha": {nome:"Jogo da Velha", preco:30, imagem:"img/jogo da velha.jpg", descricao:"Diversão clássica para todas as idades."},
    "jogo-dinossauros": {nome:"Jogo de Equilíbrio Dinossauros", preco:35, imagem:"img/equilibrio 2.jpg", descricao:"Divertido jogo de equilíbrio com tema de dinossauros."},

    // ===== BONECOS =====
    "jolteon": {nome:"Jolteon", preco:45, imagem:"img/Jolteon.jpg", descricao:"Modelo Pokémon em 3D com acabamento premium."},
    "rayquaza": {nome:"Rayquaza", preco:50, imagem:"img/Rayquaza.jpg", descricao:"Figura Pokémon detalhada e com ótima qualidade."},
    "scooby-doo": {nome:"Scooby-Doo", preco:60, imagem:"img/scooby.jpg", descricao:"Boneco Scooby-Doo em 3D, ótimo acabamento."},
    "creeper": {nome:"Creeper Minecraft", preco:50, imagem:"img/creeper.jpg", descricao:"Figura Minecraft em 3D, ótima qualidade."},

    "boneco-furia-luz": {nome:"Boneco Fúria da Luz", preco:80, imagem:"img/furia da luz2.jpg", descricao:"Boneco Fúria da Luz em 3D."},
    "boneco-banguela": {nome:"Boneco Banguela", preco:80, imagem:"img/banguela2.jpg", descricao:"Boneco Banguela em 3D."},
    "boneco-creeper": {nome:"Boneco Creeper", preco:70, imagem:"img/creeper-boneco.jpg", descricao:"Boneco Creeper articulado."},

    // ===== UTENSÍLIOS =====
    "suporte-controle1": {nome:"Suporte de Controle", preco:35, imagem:"img/suporte1.jpg", descricao:"Suporte prático para controles."},
    "suporte-controle2": {nome:"Suporte de Controle", preco:35, imagem:"img/suporte2.jpg", descricao:"Suporte prático para controles."},
    "suporte-celular": {nome:"Suporte para Celular", preco:25, imagem:"img/suporteCelular.jpg", descricao:"Suporte para celular em 3D."},
    "suporte-toalhas": {nome:"Suporte para Toalhas", preco:30, imagem:"img/suporteToalha.jpg", descricao:"Suporte para toalhas impresso em 3D."}
};

// ===== VARIÁVEIS =====
let PRODUTO_ATUAL = null;
let frete = 0;

// ===== CARREGAR PRODUTO =====
window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id || !produtos[id]) {
        alert("Produto não encontrado!");
        window.history.back();
        return;
    }

    PRODUTO_ATUAL = produtos[id];

    document.getElementById("nome-produto").textContent = PRODUTO_ATUAL.nome;
    document.getElementById("preco-produto").textContent =
        `R$ ${PRODUTO_ATUAL.preco.toFixed(2)}`;
    document.getElementById("imagem-produto").src = PRODUTO_ATUAL.imagem;
    document.getElementById("descricao-produto").textContent =
        PRODUTO_ATUAL.descricao;

    // Atualiza total ao mudar quantidade
    document.getElementById("quantidade").addEventListener("input", atualizarTotal);

    atualizarTotal();
});

// ===== FRETE =====
function calcularFrete() {
    const cep = document.getElementById("cep").value.replace(/\D/g,'');

    if (cep.length !== 8) {
        alert("Digite um CEP válido (8 números).");
        return;
    }

    if (cep.startsWith("1")) frete = 10;
    else if (cep.startsWith("0")) frete = 15;
    else frete = 20;

    atualizarTotal();
}

// ===== TOTAL =====
function atualizarTotal() {
    const quantidade = parseInt(document.getElementById("quantidade").value) || 1;
    const subtotal = PRODUTO_ATUAL.preco * quantidade;
    const total = subtotal + frete;

    window.precoFinal = total;

    document.getElementById("total-valor").textContent =
        `Total: R$ ${total.toFixed(2)}`;
}

// ===== COMPRAR PELO WHATSAPP =====
function comprarWhats() {
    const numeroWhats = "5516994038011";
    const quantidade = parseInt(document.getElementById("quantidade").value) || 1;
    const valor = window.precoFinal ?? PRODUTO_ATUAL.preco;

    const mensagem =
`Olá! Tenho interesse neste produto:

Produto: ${PRODUTO_ATUAL.nome}
Quantidade: ${quantidade}
Valor total: R$ ${valor.toFixed(2)}

Aguardo retorno 🙂`;

    window.open(
        `https://wa.me/${numeroWhats}?text=${encodeURIComponent(mensagem)}`,
        "_blank"
    );
}

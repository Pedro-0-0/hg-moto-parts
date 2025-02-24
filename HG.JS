// Funções para mostrar conteúdo ao clicar nas opções de menu
function showHome() {
    document.getElementById("content-container").innerHTML = `<h2>Bem-vindo à Hg Moto Part's!</h2><p>Aqui você encontra as melhores peças para sua moto.</p>`;
    document.getElementById("sub-categorias").style.display = "none";  // Esconde subcategorias
}

function showPeças() {
    document.getElementById("sub-categorias").style.display = "block";  // Mostra as subcategorias
    document.getElementById("content-container").innerHTML = `<h2>Escolha uma categoria</h2><p>Selecione a categoria de peças que deseja.</p>`;
}

function showContato() {
    document.getElementById("content-container").innerHTML = `
        <h2>Entre em Contato</h2>
        <p>Clique abaixo para enviar seu pedido via WhatsApp.</p>
        <button onclick="openWhatsApp()">Fazer Pedido</button>
    `;
}

// Função para abrir o WhatsApp com mensagem
function openWhatsApp() {
    let pedido = "Olá, gostaria de fazer um pedido!";
    let url = `https://wa.me/5511999999999?text=${encodeURIComponent(pedido)}`;
    window.open(url, "_blank");
}

// Função para mostrar os produtos por categoria
function showProduto(categoria) {
    const produtos = {
        motor: [
            { nome: "Motor 150cc", descricao: "Motor de alta performance", preco: "R$ 1.500,00" },
            { nome: "Motor 250cc", descricao: "Motor potente para motos maiores", preco: "R$ 2.500,00" }
        ],
        eletrica: [
            { nome: "Farol LED", descricao: "Farol de LED para motos", preco: "R$ 250,00" },
            { nome: "Bateria 12V", descricao: "Bateria de longa duração", preco: "R$ 300,00" }
        ],
        carenagens: [
            { nome: "Carenagem Esportiva", descricao: "Carenagem de alta resistência", preco: "R$ 800,00" },
            { nome: "Carenagem Custom", descricao: "Carenagem customizada", preco: "R$ 600,00" }
        ]
    };

    let produtosHtml = produtos[categoria].map(produto => `
        <div class="product-card">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <p class="price">${produto.preco}</p>
            <button onclick="adicionarCarrinho('${produto.nome}', '${produto.preco}')">Adicionar ao Carrinho</button>
        </div>
    `).join("");

    document.getElementById("content-container").innerHTML = produtosHtml;
}

// Função para adicionar ao carrinho
let carrinho = [];

function adicionarCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    alert(`${nome} foi adicionado ao carrinho.`);
}

// Função para ver o carrinho
function verCarrinho() {
    let carrinhoHtml = carrinho.map(item => `
        <p>${item.nome} - ${item.preco}</p>
    `).join("");
    let total = carrinho.reduce((total, item) => total + parseFloat(item.preco.replace('R$', '').replace(',', '.')), 0);
    carrinhoHtml += `<p>Total: R$ ${total.toFixed(2)}</p>`;
    carrinhoHtml += `<button onclick="openWhatsApp()">Finalizar Pedido</button>`;

    document.getElementById("content-container").innerHTML = carrinhoHtml;
}

import { produtoServicos } from "../services/produtos-services.js";

function salvarProduto(event) {
    event.preventDefault();

    const { value: urlImagem } = document.querySelector("input[name='url']");
    const { value: nomeProduto } = document.querySelector("input[name='nome']");
    let { value: precoProduto } = document.querySelector("input[name='price']");
    const { value: descricaoProduto } = document.querySelector("textarea[name='descricao']");

    precoProduto = parseFloat(precoProduto);

    const novoProduto = {
        imageUrl: urlImagem,
        name: nomeProduto,
        price: precoProduto,
        description: descricaoProduto
    };

    produtoServicos.criarProduto(novoProduto)
        .then(produtoCriado => {
            console.log("Novo produto criado:", produtoCriado);
            window.location.href = "products.html";
        })
        .catch(error => console.error("Erro ao criar novo produto:", error));
}

const formAdicionarProduto = document.querySelector(".adicionar-produto-formulario");
formAdicionarProduto.addEventListener("submit", salvarProduto);

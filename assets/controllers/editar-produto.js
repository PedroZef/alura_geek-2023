const btnSalvarEdicao = document.querySelector(".salvar-edicao");

function handleClick(event) {
    event.preventDefault();
    salvarEdicao(idProduto);
}

btnSalvarEdicao.addEventListener("click", handleClick);

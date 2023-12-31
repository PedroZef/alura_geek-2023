const listaProdutos = () => {
  return fetch("https://64b9a04479b7c9def6c13b6d.mockapi.io/produto")
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));
};

const getProdutoPorId = (id) => {
  return fetch(`https://64b9a04479b7c9def6c13b6d.mockapi.io/produto/${id}`)
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));
};

const atualizarProduto = (id, produtoAtualizado) => {
  return fetch(`https://64b9a04479b7c9def6c13b6d.mockapi.io/produto/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produtoAtualizado),
  })
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));
};

const criarProduto = async (novoProduto) => {
  try {
    const resposta = await fetch(
      "https://64b9a04479b7c9def6c13b6d.mockapi.io/produto",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoProduto),
      }
    );
    return await resposta.json();
  } catch (error) {
    return console.log(error);
  }
};

const deletarProduto = (idProduto) => {
  return fetch(
    `https://64b9a04479b7c9def6c13b6d.mockapi.io/produto/${idProduto}`,
    {
      method: "DELETE",
    }
  )
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));
};
const editarProduto = (idProduto) => {
  return fetch(
    `https://64b9a04479b7c9def6c13b6d.mockapi.io/produto/${idProduto}`,
    {
      method: "PATCH",
    }
  )
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));
};

export const produtoServicos = {
  listaProdutos,
  getProdutoPorId,
  atualizarProduto,
  criarProduto,
  deletarProduto,
  editarProduto,
};

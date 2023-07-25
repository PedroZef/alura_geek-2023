const form = document.querySelector('.contato-form');
const nome = document.querySelector('#nome');
const mensagem = document.querySelector('#msg');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
        nome: nome.value,
        mensagem: mensagem.value
    };
    console.log(data);
});


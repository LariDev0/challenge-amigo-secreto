let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, digite um nome');
        return;
    }

    amigos.push(nome);
    input.value = '';
    mostrarAmigos();
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let amigo of amigos) {
        lista.innerHTML += `<li>${amigo}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione amigos primeiro!');
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    
    document.getElementById('nome-sorteado').textContent = sorteado;
    document.getElementById('resultado').style.display = 'block';
    
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
}

function limparListas() {
    amigos = []; 
    document.getElementById('listaAmigos').innerHTML = ''; 
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('nome-sorteado').textContent = '';
}
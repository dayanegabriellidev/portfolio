const textoAno = document.querySelector('.ano');
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

textoAno.textContent = anoAtual;
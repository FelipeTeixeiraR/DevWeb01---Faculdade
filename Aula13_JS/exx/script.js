const form = document.querySelector('#form');
const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n1');
const btn = document.querySelector('#btn');
const resposta = document.querySelector('#resposta');

form.addEventListener("submit", function(e){
    e.preventDefault();
    n1 = Number(n1);
    n2 = Number(n2);
    resposta.innerHTML += `Resposta: ${n1 + n2}`;
    
});
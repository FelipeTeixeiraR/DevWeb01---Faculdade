const btn1 = document.getElementById("btn1");

function exibir(){
    alert("Manipulação direta!");
}
function exibir_nominada(){
    let botao = document.getElementById("btn1");
    botao.addEventListener("click", exibir);
}
exibir_nominada();

function exibir_anonima(){
    let botao = document.getElementById("btn2");
    botao.addEventListener("click", function(){
        alert("A função anonima é uma função sem nome ex: function(){...}. pode ser chamada de função anonima, callBack, função d evento(Event handler")
    });
}
exibir_anonima();
function exibir_flexa(){
    let botao = document.getElementById("btn3");
    botao.addEventListener("click", ()=> {alert("A função arrow é dada por ()=>{...}");});
}
exibir_flexa();
function passar_mouse(){
    const mouse = document.getElementById("mouse");
    mouse.addEventListener("mouseout", ()=>{
        mouse.style.color="black";
        mouse.innerText = "Passe o mouse aqui!";
    });
    mouse.addEventListener("mouseover", ()=>{
        mouse.style.color = "red";
        mouse.innerText = "Evento com o mouse!";
    });
}
passar_mouse();
/**/ 
let escolha = Number(prompt("escolha"));
let res;
switch (escolha){
    case 1: 

    var n = Number(prompt("Digite um numero:"))
    res = n<=3 ? alert(n*3): alert('não é menor');
    break;
    case 2: 
    var n = Number(prompt("Digite um numero:"));
    res = n<=3 ? alert(n*2): alert(n*3);
    break;
    case 3:
    var n = Number(prompt("digite sua altura: "));
    res = n > 1.80 ? alert("Basquete"): alert("Futebol");    
    break;
    case 4:
    var n = Number(prompt("digite sua nota: "));
    if(n > 7&& n <8){alert("B")}
    else if(n > 8){alert("A")}
    else if(n == 7){alert("C")}
    else if(n < 7){alert("D")}
    break;
    case 5:
    var n = Number(prompt("digite sua nota: "));
    var p = Number(prompt("digite seu percentual de presenca: "));
    if(p < 75){
        alert("reprovou por falta");
    }else{
        if(n > 7&& n <8){alert("B passou!")}
    else if(n > 8){alert("A passou!")}
    else if(n == 7){alert("C passou!")}
    else if(n < 7){alert("D reprovou!")}
    }
    
    break;
    case 6:
        
    var n = Number(prompt("digite o primeiro numero: "));
    var n2 = Number(prompt("digite o segundo numero: "));
    if(n + n2 > 10){
        alert(n + n2);
    }
    break;
    case 7: 
    var n = Number(prompt("digite o primeiro numero: "));
    var n2 = Number(prompt("digite o segundo numero: "));

    if(n + n2 > 20){alert(n1 + n + 8)}
    else if(n + n2 <= 20){alert(n1 + n - 5)}
    
    
    break;
    case 8: 
    var n = Number(prompt("digite um numero: "));
    var r =  
    
    break;
    case 9: break;
    case 1: break;
    case 10: break;
    case 11: break;
    case 12: break;
}
let idade = prompt('digite sua idade: ')
if (idade > 16) {
    let tt = prompt("Tem titulo de eleitor? [sim] [não]")
    if (tt == 'sim') { alert("pode votar!") }
    else { alert('não pode votar!') }
}
else { alert('não pode votar!') }

let dt = Number(prompt("escreva o numero de um mes"));

switch (dt) {
    case 1: alert('Janeiro!'); break;
    case 2: alert('Fevereiro!'); break;
    case 3: alert('Março!'); break; 
    case 4: alert('Abril!'); break;
    case 5: alert('Maio!'); break;
    case 6: alert('Junho!'); break;
    case 7: alert('Julho!'); break;
    case 8: alert('Agosto!'); break;
    case 9: alert('Setembro!'); break;
    case 10: alert('Outubro! Data das eleições!!'); break;
    case 11: alert('NOvembro!'); break;
    case 12: alert('Dezembro!'); break;
}


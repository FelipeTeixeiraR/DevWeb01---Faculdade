let escolha = prompt('diite [1] para soma \n digite [2] para subtração \n digite [3] para a multiplicação \n digite [4] para a diisão \n digite [5] para mostrar o antecessr e o sucessor ')
let n1 = prompt('Digite o primeiro numero: ')
let n2 = prompt('Digite o segundo numero: ')
n1 = Number(n1)
n2 = Number(n2)
escolha = Number(escolha)
switch (escolha){
    case 1: alert(`O resultado da soma é: ${n1 + n2}`); break;
    case 2: alert(`O resultado da subtração é: ${n1 - n2}`); break;
    case 3: alert(`O resultado da multiplicação é: ${n1 * n2}`); break;
    case 4: alert(`O resultado da divisão é: ${n1 / n2}`); break;
    case 5: alert(`O resultado do antecessor e sucessor é: ${n1} ${n2}`); break;
}   
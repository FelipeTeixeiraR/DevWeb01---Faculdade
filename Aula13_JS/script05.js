let a1 = prompt('primeiro termo: ');   
let r = prompt('razao: ');;    
let n = prompt('quantidade: ');;  

let pa = [];

for (let i = 0; i < n; i++) {
    pa.push(a1 + i * r);
}

alert(pa);

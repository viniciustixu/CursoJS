let valores = [8, 1, 7, 2, 4, 9]

for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
}

console.log('-------------------------------------------') // ignora isso

let valores2 = [1, 5, 3, 2, 7, 9]

for (let pis in valores2) {
    console.log(`A posição ${pis} tem o valor ${valores2[pis]}.`)
}

// AMBAS FAZEM A MESMA COISA
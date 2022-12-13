let num = [5, 8, 2, 9, 3]
num.push(12) // adiciona um elemento na ultima posição do array
num.sort(Number)

/*
num.sort() => organiza em ordem crescente (só que com o rabo)
num.sort(Number) => Esse de fato organiza direito
num.sort(function(a, b){return a-b}) => Assim também organiza corretamente
*/


console.log(`Nosso vetor é o ${num}, ele tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8) // esse procura um valor no array e retorna a posição dele (Se não existir ele retorna -1)
console.log(`O valor 8 está na posição ${pos}`)
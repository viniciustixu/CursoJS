var idade = 69
console.log(`Você tem ${idade} anos, portanto:`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opicional')
}else {
    console.log('Voto obrigatório')
}
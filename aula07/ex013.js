var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas!`)
if (hora > 5 && hora <= 11) {
    console.log('Bom dia!')
} else if (hora > 11 && hora <= 17) {
    console.log('Boa tarde!')
} else if (hora > 17 && hora <= 24) {
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada!')
}

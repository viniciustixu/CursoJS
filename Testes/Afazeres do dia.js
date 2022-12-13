agora = new Date()
var diasem = agora.getDay()


switch(diasem) {
    case 0:
        console.log('Domingo - melhorar aparência')
        break
    case 1:
        console.log('Segunda - ir no mercado')
        break
    case 2:
        console.log('Terça - botar lixo pra fora')
        break
    case 3:
        console.log('Quarta - desprocrastinar algo')
        break
    case 4:
        console.log('Quinta - arrumar o quarto')
        break
    case 5:
        console.log('Sexta - lavar roupa')
        break
    case 6:
        console.log('Sabado - lavar louça')
        break
    default:
        console.log('[ERRO]')
        break        
}

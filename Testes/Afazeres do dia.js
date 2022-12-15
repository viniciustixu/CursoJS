function chamada() {
    var res = document.querySelector('div#resultado')
    agora = new Date()
    var diasem = agora.getDay()

    switch(diasem) {
        case 0:
            res.innerHTML = '<strong>Domingo - melhorar aparência</strong>'
            break
        case 1:
            res.innerHTML = '<strong>Segunda - ir no mercado</strong>'
            break
        case 2:
            res.innerHTML = '<strong>Terça - botar lixo pra fora</strong>'
            break
        case 3:
            res.innerHTML = '<strong>Quarta - desprocrastinar algo</strong>'
            break
        case 4:
            res.innerHTML = '<strong>Quinta feita - Arrumar o quarto</strong>'
            break
        case 5:
            res.innerHTML = '<strong>Sexta - lavar roupa</strong>'
            break
        case 6:
            res.innerHTML = '<strong>Sabado - lavar louça</strong>'
            break
        default:
            res.innerHTML = '<strong>[ERRO]</strong>'
            break        
    }

}

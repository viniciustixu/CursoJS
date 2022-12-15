function chamada() {
    var res = document.querySelector('div#resultado')
    agora = new Date()
    var diasem = agora.getDay()
    var b = document.getElementById('resultado')

    switch(diasem) {
        case 0:
            res.innerHTML = '<strong>Domingo - melhorar aparência</strong>'
            b.style.backgroundImage = "url(backgrounds/barbear.png)";
            break
        case 1:
            res.innerHTML = '<strong>Segunda - ir no mercado</strong>'
            b.style.backgroundImage = "url(backgrounds/mercado.png)";
            break
        case 2:
            res.innerHTML = '<strong>Terça - botar lixo pra fora</strong>'
            b.style.backgroundImage = "url(backgrounds/lixo.png)";
            break
        case 3:
            res.innerHTML = '<strong>Quarta - desprocrastinar algo</strong>'
            b.style.backgroundImage = "url(backgrounds/desprocrastinar.png)";
            break
        case 4:
            res.innerHTML = '<strong>Quinta feira - Arrumar o quarto</strong>'
            b.style.backgroundImage = "url(backgrounds/quarto.png)";
            break
        case 5:
            res.innerHTML = '<strong>Sexta - lavar roupa</strong>'
            b.style.backgroundImage = "url(backgrounds/roupa.png)";
            break
        case 6:
            res.innerHTML = '<strong>Sabado - lavar louça</strong>'
            b.style.backgroundImage = "url(backgrounds/louca.png)";
            break
        default:
            res.innerHTML = '<strong>[ERRO]</strong>'
            break        
    }

}

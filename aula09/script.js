function checar() {
    var in_ano = document.getElementById('i_ano')
    var data = new Date()
    var ano = data.getFullYear()
    var i_ano = Number(in_ano.value)
    var age = ano - i_ano
    var fsex = document.getElementsByName('radsex')
    var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        

    if (in_ano.value.length == 0 || i_ano > ano || i_ano < 1900) {
        window.alert('Digite uma idade válida!')
    }
    if (fsex[0].checked) {
        genero = 'homem'
        if (age >=0 && age <=12) {
            //criança 
            img.setAttribute('src', 'fotobebehomem.png')
        } else if (age <= 22) {
            //jovem
            img.setAttribute('src', 'fotojovemhomem.png')
        } else if (age <= 50) {
            //adulto
            img.setAttribute('src', 'fotohomem.png')
        } else {
            //idoso
            img.setAttribute('src', 'fotovelho.png')
        }


    } else if (fsex[1].checked) {
        genero = 'mulher'
        if (age >=0 && age <=12) {
            //criança
            img.setAttribute('src', 'fotobebemulher.png')
        } else if (age <= 22) {
            //jovem
            img.setAttribute('src', 'fotojovemmulher.png')
        } else if (age <= 50) {
            //adulto
            img.setAttribute('src', 'fotomulher.png')
        } else {
            //idoso
            img.setAttribute('src', 'fotovelha.png')
        }

    }
    result.innerHTML = `Detectamos ${genero} com ${age} anos` 
    result.appendChild(img)
}

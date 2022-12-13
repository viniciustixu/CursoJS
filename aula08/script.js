function carregar() {
let msg = window.document.getElementById('msg')
let data = new Date()
let hora = data.getHours()
let img = document.getElementById('imagem')
msg.innerHTML = `Agora são ${hora} horas!`

if (hora >= 5 && hora < 12) {
    img.src = 'fotomanha.png'
    document.body.style.background = '#EBF6E5'
} else if (hora >= 12 && hora < 18) {
    img.src = 'fototarde.png'
    document.body.style.background = '#f2ce8c'
} else if (hora >= 18 && hora < 24) {
    img.src = 'fotonoite.png'
    document.body.style.background = '#1f1f1f'
} else {
    img.src = 'fotonoite.png'
    document.body.style.background = '#1f1f1f'
}
}

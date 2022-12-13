var ini = document.getElementById('i_um')
var meio = document.getElementById('i_dois')
var fim = document.getElementById('i_tres')
var res = document.getElementById('result')


function contar() {
    let i = Number(ini.value)
    let m = Number(meio.value)
    let f = Number(fim.value)

    if (ini.value.length == 0 || meio.value.length == 0 || fim.value.length == 0) {
        window.alert('Faltam números!')
    } else {
        res.innerHTML = (``)
        while (i < m) {
        res.innerHTML += (`${i}, `)
        i += f
        }
        res.innerHTML += (`${i}!`)
    }
}

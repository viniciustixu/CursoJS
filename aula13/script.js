var num = document.getElementById('i_number')
var res = document.getElementById('result')

function calcular() {
    let n = Number(num.value)
    for (let x = 1;x<=10;x++) {
        res.innerHTML += (`${n} x ${x} = ${n*x}<br />`)
    }
}

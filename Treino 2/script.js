var num1 = document.getElementById('txtNum')
var num2 = document.getElementById('txtNum2')
var sinal = '+'
var res = document.getElementById('secRes')
var sin = document.getElementById('sinal')

function adição() {
    sinal = null
    sinal = '+'
    sin.innerHTML = '+'
}

function subtração() {
    sinal = null
    sinal = '-'
    sin.innerHTML = '-'
}

function multiplicação() {
    sinal = null
    sinal = '*'
    sin.innerHTML = '*'
}

function divisão() {
    sinal = null
    sinal = '/'
    sin.innerHTML = '/'
}

function calcular() {
    if (num1.value.length == 0 || num2.value.length == 0) {
        res.innerHTML = `[ERRO]Faltam dados!`
    } else {
    let n1 = Number(num1.value) 
    let n2 = Number(num2.value)
    switch(sinal) {
        case '+':
            res.innerHTML = `${n1+n2}`
            break
        case '-':
            res.innerHTML = `${n1-n2}`
            break
        case '*':
            res.innerHTML = `${n1*n2}`
            break
        case '/':
            res.innerHTML = `${n1/n2}`
            break
        default:
            res.innerHTML = `[ERRO]Faltam dados!`
            break
    }
}
}






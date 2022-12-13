let num = document.getElementById('txtnum')
let res = document.getElementById('result')
let array = []
let pos = -1

function adicionar() {
    if (num.value.length == 0 || Number(num.value) < 1 || Number(num.value) > 100) {
        window.alert('Digite um número válido!')
    } else {
        let truenum = Number(num.value)
        array.push(truenum)


        let lnum = document.getElementById('selnum')
        let item = document.createElement('option')
        item.text = `número ${truenum} adicionado`
        lnum.appendChild(item)
        pos++
        num.value = ''
        num.focus()
        res.innerHTML = ''
        
    }
}

function checar() {
    if (array.length == 0) {
    window.alert('Primeiro, digíte algum número!')
    } else {
        let soma = 0
        
        for(var i = 0; i < array.length; i++) {
            soma += array[i];
        }

        array.sort(function(a, b){return a-b})
        res.innerHTML = 
        `Ao todo, temos ${array.length} números! <br />
        O menor número é ${array[0]}!<br />
        O maior número é ${array[pos]}!<br />
        A soma entre os números é ${soma}!<br />
        A média entre os números é ${soma / array.length}!`        
    }
}

let num = document.getElementById('txtnum')
let array = []
let pos = 0
let res = document.getElementById('result')





function adicionar() {
    if (num.value.length == 0) {
        window.alert('Digite um número válido!')
    } else {
        let truenum = Number(num.value)
        array.push(truenum)

        let lnum = document.getElementById('selar')
        let item = document.createElement('option')
        item.text = `número ${truenum} adicionado`
        lnum.appendChild(item)
        pos++
        num.value = ''
        num.focus()
        res.innerHTML = ''
    }
}

function resultados() {
    if (array.length == 0) {
        window.alert('Digíte alguns valores antes!')
    } else {
        let soma = 0
        
        for(var i = 0; i < array.length; i++) {
            soma += array[i];
        }
    array.sort(function(a, b){return a-b})
    res.innerHTML = `Ao todo, temos ${array.length} números!<br />
    O maior número é ${array[pos - 1]}! <br />
    O menor número é ${array[0]}!<br />
    A soma dos valores é ${soma}<br/>
    A média entre os valores é ${soma / pos}!`
    }
}
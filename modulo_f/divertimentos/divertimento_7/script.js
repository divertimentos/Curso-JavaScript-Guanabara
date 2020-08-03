// ANALISADOR DE NUMEROS

// var result = document.getElementById("result")
// var lista = document.getElementById("adicionados")
// var userInput = document.getElementById("userInput")
// var listaNumeros = new Array()

let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        // Adiciona na lista
        valores.push(num.value)
        console.log(`${num.value} adicionado à lista`)

        // Mostra na caixa
        const opt = document.createElement('option');
        opt.appendChild(document.createTextNode(`Valor ${num.value} adicionado`))
        lista.appendChild(opt)

    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }


    // let item = document.createElement("option")
    // item.text = userInput.value    
    // lista.appendChild(item)
    // listaNumeros.push(userInput)
}

function mostrarResultado() {
    console.log('Função mostrarResultado() foi chamada')
}

// function showAnalysis() {
// // result.innerHTML += listaNumeros[0].value
//     let item = document.createElement("p")
//     item.text = "Ao todo, temos x números cadastrados"
//     result.appendChild(item)
//     result.innerHTML = item.value
// }
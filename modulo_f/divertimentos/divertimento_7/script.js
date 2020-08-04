// ANALISADOR DE NUMEROS

// var result = document.getElementById("result")
// var lista = document.getElementById("adicionados")
// var userInput = document.getElementById("userInput")
// var listaNumeros = new Array()

let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [1, 2, 3, 4, 5, 5, 5]

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
}

function gerarResultado() {
    console.log("Função gerarResultado chamada")
    const numerosCadastrados = valores.length
    const maiorValor = valores.reduce((x, y) => {
        return Math.max(x, y)
    }) 
    const menorValor = valores.reduce((x, y) => {
        return Math.min(x, y)
    }) 

    const somatoria = valores.reduce((x, y) => {
        return x + y 
    })

    const media = (somatoria / numerosCadastrados)

    console.log(`Tamanho da lista: ${numerosCadastrados} números`)
    console.log(`Maior valor: ${maiorValor}`)
    console.log(`Menos valor: ${menorValor}`)
    console.log(`Somatória: ${somatoria}`)
    console.log(`Média: ${media}`)

}

function mostrarResultado(gerarResultado) {
    
}

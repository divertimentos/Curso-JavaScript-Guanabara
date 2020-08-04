// ANALISADOR DE NUMEROS

// var result = document.getElementById("result")
// var lista = document.getElementById("adicionados")
// var userInput = document.getElementById("userInput")
// var listaNumeros = new Array()

let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
// let valores = [1, 2, 3, 4, 5, 5, 5]
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
    valores.push(Number(num.value))
    console.log(`${num.value} adicionado à lista`)

    // Mostra na caixa
    const opt = document.createElement('option');
    opt.appendChild(document.createTextNode(`Valor ${num.value} adicionado`))
    lista.appendChild(opt)
    res.innerHTML = ''

  } else {
    window.alert('Valor inválido ou já encontrado na lista')
  }
  num.value = ''
  num.focus()
}

function gerarResultado() {
  if (valores.length == 0) {
    window.alert('Adicione valores antes de finalizar!')
  } else {

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
    
    res.innerHTML = ''
    res.innerHTML += `<p>Ao total, temos ${numerosCadastrados} números cadastrados</p>`
    res.innerHTML += `<p>O maior número informado foi: ${maiorValor}</p>`
    res.innerHTML += `<p>O menor número informado foi: ${menorValor}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${somatoria}</p>`
    res.innerHTML += `<p>A média dos valores digitados é: ${media}</p>`
    // const resultados = [numerosCadastrados, maiorValor, menorValor, somatoria, media]
    const resultados = {

    }
    return resultados

    console.log(`Tamanho da lista: ${numerosCadastrados} números`)
    console.log(`Maior valor: ${maiorValor}`)
    console.log(`Menos valor: ${menorValor}`)
    console.log(`Somatória: ${somatoria}`)
    console.log(`Média: ${media}`)
  }

}

// function mostrarResultado(gerarResultado) {

//   gerarResultado.map((res) => {

//   })
// }

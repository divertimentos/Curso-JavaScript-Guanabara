// ANALISADOR DE NUMEROS
var result = document.getElementById("result")
var lista = document.getElementById("adicionados")
var userInput = document.getElementById("userInput")
var listaNumeros = new Array()

function gatherNumber() {
    let item = document.createElement("option")
    item.text = userInput.value    
    lista.appendChild(item)
    listaNumeros.push(userInput)
}

function showAnalysis() {
// result.innerHTML += listaNumeros[0].value
    let item = document.createElement("p")
    item.text = "Ao todo, temos x números cadastrados"
    result.appendChild(item)
    result.innerHTML = item.value
}
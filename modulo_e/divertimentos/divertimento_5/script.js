function generateTable() {
    var number = document.getElementById("number")
    var result = document.querySelector("option#result")

    let factor = Number(number.value)
    for (let i = 1; i <= 10; i++ ) {
        // result.innerHTML = "Resultado:"
        result.innerHTML += `<br>${factor} x ${i} = ${factor * i}`
    }

    // for (i = 1; i <= 10; i++) {
    //     result.innerHTML += `<br> ${number.value} x ${i} = ${number.value * i}`
    // }

}
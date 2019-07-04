function generateTable() {
    let num = document.getElementById("number")
    let result = document.getElementById("result")
    if (num.value.length == 0) {
        window.alert("Você precisa digitar um número!")
    } else {
        var n = Number(num.value)
        result.innerHTML = ""
        for (i=1; i<=10; i++) {
            let item = document.createElement("option")
            item.text = `${n} x ${i} = ${n*i}`
            result.appendChild(item)
        }
    }

    // let factor = Number(number.value)
    // for (let i = 1; i <= 10; i++ ) {
    //     // result.innerHTML = "Resultado:"
    //     result.innerHTML += `<br>${factor} x ${i} = ${factor * i}`
    // }

    // for (i = 1; i <= 10; i++) {
    //     result.innerHTML += `<br> ${number.value} x ${i} = ${number.value * i}`
    // }

}
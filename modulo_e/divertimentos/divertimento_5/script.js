function generateTable() {
    var result = document.querySelector("option#result")
    var number = document.getElementById("number")
    
    for (i = 1; i <= 10; i++) {
        result.innerHTML += `<br> ${number.value} x ${i} = ${number.value * i}`
    }

}
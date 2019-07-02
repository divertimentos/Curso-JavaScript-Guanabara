function calcularPasso() {
    var startNumber  = document.getElementById("start")
    var endNumber = document.getElementById("end")
    var stepNumber = document.getElementById("step")
    var result = document.querySelector("div#result")

    for (var i = 5; i < 12; i += 2) {
        result.innerHTML += i

    }
}
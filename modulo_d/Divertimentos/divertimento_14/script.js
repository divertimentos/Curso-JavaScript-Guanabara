function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")

    var data = new Date()
    var hora = 20
    // var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}h!`

    if(hora >= 0 && hora < 12) {
        // Bom dia
        img.src = "morning.png"
        document.body.style.background = "#be6f0a"
    } else if(hora >= 12 && hora <= 18) {
        // Boa tarde
        img.src = "afternoon.png"
        document.body.style.background = "#f6e7ea"
    } else {
        // Boa noite
        img.src = "night.png"
        document.body.style.background = "#023c4a"

    }
}

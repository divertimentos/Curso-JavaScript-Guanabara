// Bom dia, boa tarde, boa noite.

var agora = new Date()
var horas = agora.getHours()
var minutos = ((agora.getMinutes() < 10? '0': '') + agora.getMinutes())

console.log(`Agora são exatamente ${horas}h${minutos - 18}.`)

if (horas < 12) {
    console.log("Bom dia")
} else if (horas <= 18) {
    console.log("Boa tarde")
} else {
    console.log("Boa noite")
}

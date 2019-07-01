// var birthDate = document.querySelector("#birthDate").value
// var result = document.querySelector("#result")   

// function submitInfo(){
// }

// document.querySelector("#result").innerHTML = birthDate

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtano")
    var res = document.querySelector("div#result")

    if(fAno.value.length == 0 || fAno.value > ano) {
        window.alert("Veriique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        
        if (fsex[0].checked) {
            genero = "masculino"
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute("src", "baby-male.jpg")
            } else if (idade < 21) {
                // Jovem
                img.setAttribute("src", "young-male.jpg")
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src", "adult-male.jpg")
            } else {
                // Idoso
                img.setAttribute("src", "elder-male.jpg")
            }
        } else if(fsex[1].checked) {
            genero = "feminino"
            if(idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute("src", "baby-female.jpg")
            } else if(idade < 21) {
                // Jovem
                img.setAttribute("src", "young-female.jpg")
            } else if(idade < 50) {
                // Adulto
                img.setAttribute("src", "adult-female.jpg")
            } else {
                // Idoso
                img.setAttribute("src", "elder-female.jpg")
            }

        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos gênero ${genero} com ${idade} anos!`
        res.appendChild(img)
    }
}
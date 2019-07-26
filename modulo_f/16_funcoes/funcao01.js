function parImpar(num) {
    if(num % 2 == 0) {
        return `O número ${num} é par.`
    } else {
        return `O número ${num} é ímpar.`
    }
}

console.log(parImpar(7))
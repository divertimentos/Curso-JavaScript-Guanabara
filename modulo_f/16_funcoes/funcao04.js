// Fatorial

// 5! = 5 * 4 * 3 * 2 * 1

function fatorial(num) {
    let fat = 1
    for(let c = num; c > 1; c--) {
        fat *= c
    }
    return `${num}! = ${fat}`
}

console.log(fatorial(4))


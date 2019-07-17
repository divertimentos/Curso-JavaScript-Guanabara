let nums = [5, 8, 2, 9, 3]
nums.push(1)
nums.sort()
console.log(nums)
console.log(`Nosso vetor tem ${nums.length} posições`)
console.log(`O primeiro valor do vetor é: ${nums[0]}`)

let pos = nums.indexOf(8)
if (pos == -1) {
    console.log("Valor não encontrado.")
} else {
    console.log(`O valor 8 está na posição ${pos}`)

}
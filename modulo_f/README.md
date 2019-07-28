# Módulo F: Avançando os estudos em JavaScript (Aulas 15-17)

# Conteúdos deste módulo:

* Variáveis compostas (arrays)
* Uso de funções e eventos
* Passagem de parâmetros
* Exercícios propostos
* Último vídeo: próximos passos

# Aula 15: Variáveis Compostas

Nesta aula, trabalharemos com vetores/arrays.

## Diferença entre variável simples e variável composta

* As **variáveis simples** são aquelas que armazenam apenas **um valor** por vez.
* As **variáveis compostas** são capazes de armazenar vários valores em uma mesma estrutura.

## Exemplo prático

Em vez de criar uma variável para cada item que precisa ser armazenado, como por exemplo carros:

```javascript
var a1 = "carroUm"
var a2 = "carroDois"
var a3 = "carroTres"
var a4 = "carroQuatro"
var a5 = "carroCinco"
```

é possível agrupar todos os carros em uma variável só chamada `automoveis`.

Para identificar cada carro dentro da variável, usamos índices dentro de colchetes `[]`.

### Sintaxe de atribuição de um array/vetor:

```javascript
vaga a = ["carroUm", "carroDois","carroTres"]
```

```javascript
let nums = [5,8,4]	
```

### Adicionando um valor ao vetor

```javascript
num[3] = 6 // Adicionando usando índice como critério
num.push(7) // Adicionando um item ao fim do vetor
```

### Descobrindo o tamanho do vetor

```javascript
num.length // O length JS não tem parênteses, porque o length não é um método, é um atributo
```

### Sort

```javascript
num.sort() // Reordena todos os elementos em ordem crescente
```

### Mostrar um vetor de forma otimizada

```javascript
var nums = [4, 6, 5, 8, 7]
nums.sort() // reordena para [4, 5, 6, 7, 8]

console.log(nums[0])
console.log(nums[1])
console.log(nums[2])
console.log(nums[3])

// Usando o for:

for(pos=0; pos<nums.length; pos++){
  console.log(nums[pos])
}
```

### Mostrar o vetor de uma forma ainda mais otimizada: for in

```javascript
for(let pos in nums) {
  console.log(num[pos])
}

// Parece Python!
```

### Buscando valores dentro de um vetor

```javascript
nums.indexOf(7) // A função retornará "3"

Ele retorna "-1" para valores não encontrados
```

# Aula 16: Funções

Como já começamos a ver funções, nesta aula aprofundaremos os conceitos relacionados a ela, tais como parâmetros e retornos.

## Itens que podem estar presentes em uma função:

* uma chamada
* um conjunto de parâmetros
* uma ação
* um retorno

## Definições objetivas de função

* Funções são **ações** executadas assim que são **chamadas** ou em decorrência de algum **evento**.
* **Funções** podem receber **parâmetros** e retornar um **resultado**.

## Definição formal de função

```javascript
//definição de função:
function ação(parâmetro) {
  // write some code here!
  return result
}

//chamada de função:
ação(5)
```

## Função que retorna se um número é par ou ímpar

```javascript
function parImp(num) {
  if(num % 2 == 0) {
    // É Par
    return "Par"
    
  } else {
    // É ímpar
    return "Ímpar"
  }
}

let res = parImp(11)
```


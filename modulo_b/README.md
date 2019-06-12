# Módulo B (aulas 5 - 8)

# Aula 5: Variáveis e tipos primitivos

## Adicionando comentários em JS:

Para comentar uma linha, utilize barras duplas:

````javascript
var testVar = "Variável de teste." // isto é um comentário em JS.
````

Para comentar duas ou mais linhas, utilize **barra + asterisco** para abrir e **asterisco + barra** para fechar:

````javascript
/* Isto é um comentário em uma linha.

JAVASCRIPTO EH TOPSTER <3

E isto é a linha final de um comentário. */

var testVar = "Isto é um código fora da área de comentários."; 
````

## Variáveis

* Um único sinal de igual (=) nunca é chamado de 'igual', sempre de '**recebe**'.
* Se vocie atribui `Null` a uma variável, tudo dentro dela é destruído.

**Curiosidade**: No JavaScript moderno, além de utilizar a palavra **var**, também podemos usar a palavra **let** para definir variáveis.

````javascript
var n1 = 5
var n2 = 8.5
var n3 = 15

var s1 = "JavaScript"
var s2 = `Curso em vídeo`
var s3 = 'Guanabara'
````

### Identificadores

As variáveis se chamam identificadores, e eles possuem regras de formação.

* Variáveis podem começar com **letra**, **$** (cifrão) ou **_** (*underscore*).
* Não podem começar com **números**
* É possível usar **letras** ou **números**
* É possível utilizar **acentos** e **símbolos**
* Não podem conter **espaços**
* Não podem ser **palavras reservadas** (uma variável chamada `var`, por exemplo.)

### Node.js

#### Shell do Node.js no terminal:

![Shell do Node no Terminal](https://github.com/guiemi-learning-center/curso-javascript-guanabara/blob/master/media/node_terminal.png)

#### Shell do Node.js no terminal do VSCode:

![Shell do Node no VSCode](https://github.com/guiemi-learning-center/curso-javascript-guanabara/blob/master/media/node_vscode.png)

### Dicas na hora de nomear identificadores

* **Maiúsculas** e **minúsculas** fazem diferença
* Tente escolher **nomes coerentes** para as variáveis
* Evite se tornar um **programador alfabeto** ou um **programador contador**
  * O programador alfabeto é aquele que nomeia todas as variáveis como `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h` ou `x`, `y`, `z`
  * O programador contador é aquele que nomeia todas as variáveis como `n1`, `n2`, `n3`, `n4`, `n5`

## Tipos primitivos

O JS trata diferentemente tipos diferentes de dados. Há três deles que são especiais e conhecidos como *tipos primitivos primordiais*, — `number`, `string` e `boolean` —, pois deles são derivados outros tipos. Em JS, há uma série de outros tipos primitivos e alguns subtipos, derivados dos tipos primitivos.

* Dentro de **number**, temos os subtipos:
  * Infinity
  * NaN (Not a Number)
* **null**
* **undefined**
* O **object** também possui vários subtipos, dentre eles:
  * Array
* **function**

Usando o operador `tipeof` e passando para ele qualquer tipo, você pede para a linguagem checar para você com qual tipo ela está lidando:

````javascript
> var n = 200 // atribuindo à variável n o número 200
undefined
> n // chamando a variável n
200
> typeof n // pedindo o tipo de n
'number'
> n = "DuckDuckGo" // atribuindo agora uma string à variável
'DuckDuckGo'
> typeof n // checando se o tipo foi alterado
'string'
> typeof 6
'number'
> typeof 6.5
'number'
> typeof "6.5"
'string'
> typeof []
'object'
> typeof {}
'object'
> typeof function(){}
'function'
> typeof undefined
'undefined'
> typeof NaN
'number'
> typeof Infinity
'number'
> typeof null
'object'

````

Um detalhe interessante é que o JS considera `null` um objeto.

# Aula 6: Tratamento de dados

* Esta aula fala principalmente sobre os tipos **number** e **string**.

* Para printar no `alert()` uma variável juntamente com uma string, basta concatená-las usando o operador `+`:
```javascript
var nome = window.prompt("Qual é o seu nome?")
```
Ou -- como eu gosto de fazer -- você pode usar um recurso chamado *string interpolation* (Interpolação de string):
```javascript
window.alert("É um grande prazer te conhecer, " + nome)
window.alert(`É um grande prazer te conhecer, ${nome}.`)
```

## Conversão de string para Number

Como o operador `+` serve tanto para soma quanto para concatenação, você precisa dizer ao JS qual tipo de ação você está requerindo desse operador, visto que, por exemplo, o `window.prompt` automaticamente converte o que recebe para **string**. Há várias maneiras, no JS, de se fazer a conversão de **string** para **number**:

* `Number.parseInt(n)`: converte um número para um número **inteiro**
* `Number.parseFloat(n)`: converte um número para um **float**/**real**
* `Number()`: modo mais moderno de conversão, tanto para **inteiro** quanto para **float**

## Conversão para String

* `String(n)`
* `n.toString()`

## Outros métodos de String

* `s.length`
* `s.toUpperCase()`
* `s.toLowerCase()`

## Outros métodos de Number

* `n1.toFixed(n)`
* Substituir ponto por vírgula em números decimais: `n1.toFixed(2).replace('.', ',')`
  
* `n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})`:
* --> R$ 1,545.50

# Aula 7: Operadores (Parte 1/2)

Os operadores que veremos no curso serão os operadores: **aritméticos**, de **atribuição**, **relacionais**, **lógicos ** e **ternário**.

* Nesta aula, focaremos nos operadores **aritméticos** e nos operadores de **atribuição**.

## Operadores Aritméticos:

* `+`: soma/concatenação
* `-`: subtração
* `*`: multiplicação 
* `/`: divisão real
* `%`: módulo/resto
* `**`: potenciação

## Operadores de atribuição

* `var a = (5 + 3)`

#### LEMBRETE: um cuidado com o  qual sempre devemos tomar é com a precedência dos operadores ([PEMDAS](https://pt.khanacademy.org/math/pre-algebra/pre-algebra-arith-prop/pre-algebra-order-of-operations/v/more-complicated-order-of-operations-example)):

* Ordem de precedência na programação: Parênteses **>** Potência **>** Multiplicação, Divisão, Módulo **>** Adição, Subtração

## Há também as **autoatribuições**:

```javascript
var n = 3
n = n + 4
n = n - 5
n = n * 4
n = n / 2
n = n ** 2
n = n % 5
```

###  Simplificando as autoatribuições em JavaScript:

```javascript
var n = 3
n += 4
n -= 5
n *= 4
n /= 2
n %= 5
```

### Simplificando ainda mais as autoatribuições em JavaScript usando incrementos e decrementos

```javascript
var n = 3
n++
n--

// ou

++n
--n
```

# Aula 8: Operadores (Parte 2/2)

Nesta aula, falaremos sobre **operadores relacionais**, **operadores lógicos** e sobre o **operador ternário**.

## Operadores Relacionais

* Os operadores relacionais são:
  *  `>` (maior)
  *  `<` (menor)
  *  `>=` (maior ou igual)
  *  `<=` (menor ou igual) 
  * `==`(igual) 
  * `!=` (diferente)

Note que: o resultado de expressões que utilizam operadores relacionais será sempre booleano (*true* ou *false*):

```javascript
5 > 2
true

7 < 4
false

8 >= 8
true

9 <= 7
false

5 == 5
true

4 != 4
false

```

### Operadores de identidade

Há também os operadores de identidade:

```javascript
5 == 5 // retorna true
5 == '5' // returna true
```

O operador de igualdade do JavaScript **não testa tipos**, então **'5'** continua sendo **5**. 

O operador de identidade é o "**===**", também chamado de **operador de igualdade restrita**:

```javascript
5 === '5' // retorna false, pois 5 é do tipo number e '5' é do tipo string.
```

## Operadores Lógicos

O JS possui 3 operadores lógicos:

* A exclamação (`!`) significa **negação**;
* Os dois &&s comerciais (`&&`) significam **conjunção** ou **e**;
* Os dois pipes (`||`) significam **disjunção** ou **ou**.

### Negação (!)

O operador de negação é **unário**, ou seja, ele só possui um único operando.

```javascript
!true --> false
!false -- true
```

### Conjunção (&&)

O operador de conjunção é **binário**, isto é, ele aceita dois operadores lógicos, um de cada lado.

```javascript
true && true --> true
true && false --> false
false && true --> false
false && false --> false
```

### Disjunção (||)

O operador de disjunção, assim como o de conjunção, também é **binário**.

```javascript
true || true --> true
true || false --> true
false || true --> true
false || false -- false
```

Exemplos:

```javascript
var a = 5
var b = 8
a > b && b % 2 == 0
false
```

O exemplo retorna *false* porque primeiro são feitos os **operadores aritméticos**, depois os **operadores relacionais** e depois os **operadores lógicos**:

* `b % 2 == 0` é `true`
* `a > b` é `false`
* então `false && true` retorna `false`

```javascript
var a =  5
var b = 8
a <= b || b / 2 == 2
true
```

* `b / 2 == 2` retorna `false`
* `a <= b` retorna `true`
* então `true` || `false` retorna `true`

```javascript
idade >= 15 && idade <= 17 // idade está entre 15 e 17?
estado == "RJ" || estado == "SP" // o estado é RJ ou SP?
salario > 1500 && sexo != "M" // o salário é acima de R$ 1.500,00 e não é homem?
```

**Importante**: se numa mesma expressão houver vários operadores lógicos, primeiro é computada a **negação**, depois a **conjunção** e depois a **disjunção**.

## Precedência de operadores

![precedencia_de_operadores](https://github.com/guiemi-learning-center/curso-javascript-guanabara/blob/master/media/precedencia_operadores.JPG)

## Operador Ternário

Ele é composto por dois símbolos, o `?` e o `:`, que aparecem na mesma operação. O nome dele é **ternário** porque ele é composto por três argumentos:

```javascript
media >= 7.0? "Aprovado" : "Reprovado"
```

```javascript
var res = x % 2 == 0? 5: 9
res
5

// Eu achei isso MARAVILHOSO
```

```javascript
var idade = 19
var r = idade >= 18? "Maior": "Menor"
r
'Maior'

// ADOREI o operador ternário do JS!
```
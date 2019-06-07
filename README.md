# README do curso de fundamentos do JavaScript (Gustavo Guanabara)


  # Aula 1: O que o JavaScript é capaz de fazer

- Client x Server
- Website é composto por basicamente 3 tecnologias:
  * Jornalista (**HTML**): escreve texto, usa imagens, cataloga vídeos e imagens etc.
  * Designer (**CSS**): pega as mídias e torna-se bonitas, organizando-as em formatos diferentes
  * Programador (**JavaScript**): trata da engenharia da entrega do jornal
- O HTML organiza os textos, o conteúdo
- O CSS pega o texto e o organiza para torná-lo mais agradável
- O JS faz as interações, como uma legenda em uma imagem, amplia uma imagem ao passar o mouse em cima dela etc. Ele inclusive modifica elementos escritos em HTML e CSS
- Quem utiliza o JS?

  * Google, YouTube, LinkedIn, Netflix etc.



# Aula 2: como chegamos até aqui

Uma (interessantíssima) aula com um breve histórico do JavaScript (doravante **JS**) — e da própria web em si.

# Aula 3: Dando os primeiros passos

## Como aprender?

* 💻 Assistindo aos vídeos das aulas
* ⌨️ Escrevendo código 
* 📒 Lendo livros sobre JS e outros materiais de referência
  * Livro: [JavaScript: O Guia Definitivo (David Flanagan)](https://www.amazon.com.br/JavaScript-Guia-Definitivo-David-Flanagan/dp/856583719X)
  * Livro: [JavaScript: Guia do Programador (Maurício Samy Silva)](https://novatec.com.br/livros/javascript-guia-programador/)
  * Livro: [JavaScript Eloquente - 2ª edição (Marijn Haverbeke)](https://github.com/braziljs/eloquente-javascript)
  * Guia de referência: [Referência JavaScript (Mozilla)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference)
  * Guia de referência: [ECMAScript® Language Specification](https://www.ecma-international.org/ecma-262/9.0/index.html#Title)
* 📘 Fazendo anotações (como esta) das aulas
* 👨‍👩‍👧‍👦 Interagindo com outras pessoas
  * Estudar em conjunto
  * Tirar dúvidas com outras pessoas
* 🖥 Desenvolver projetos próprios
  * Aplicar a ferramenta de programação para solucionar problemas reais do dia a dia

## Dúvidas comuns de quem está começando a programar

### 👨🏿‍Será que eu sou velho demais ou novo demais para começar a aprender a programar?

Não existe idade mínima e máxima para aprender. Cada um aprende no seu ritmo. Além disso, não ouça pessoas que tentarem te convencer de que você está velho demais ou novo demais.

### 👩🏾‍💻 Programação não é 'coisa de homem'?

* Bom, pra começar a primeira linguagem de programação foi desenvolvida por uma matemática chamada [Ada Lovelace](https://pt.wikipedia.org/wiki/Ada_Lovelace). Historicamente, os primeiros profissionais da computação foram, na verdade, mulheres (Fonte: [Wikipedia](https://en.wikipedia.org/wiki/Women_in_computing)). Todos podem aprender a programar, independentemente de fatores como sexo, gênero, orientação sexual ou etnia. 

### 🏡 Eu preciso morar em uma cidade grande?

Com a internet, o fator lugar deixa de ser tão relevante, pois todos em teoria têm acesso aos conteúdos "*core*", necessários ao aprendizado, disponibilizados online.

### 🤓 Eu preciso ser 'nerd' para gostar de programar?

Não. Você só precisa querer aprender a programar. Ninguém é *especial* só porque sabe programar.

### 🇺🇸 É obrigatório ser bom em matemática e/ou ser bom em inglês para aprender a programar?

Há hoje ótimos materiais em português para quem está começando. E não é necessário ter aptidão para matemática para aprender, basta **querer** aprender.

### ♟ Aprender lógica de programação é perda de tempo?

Assim como, no filme Karate Kid, o personagem principal é colocado para aprender a pintar cerca para poder aprender Karatê, na programação, quando você aprende lógica, você aprende a moldar o seu *mindset*, o que tornará o seu processo de aprendizado mais assertivo.

### 💵 Todo programador ganha muito dinheiro?

Programadores iniciantes não vão ganhar muito dinheiro, nem o melhor emprego. Quando você tiver experiência, o seu salário não será mais seu objetivo, ele será sua consequência.

### 🏆 Qual a melhor linguagem de programação que existe?

A resposta é: nenhuma. Linguagens de programação cumprem propósitos específicos. Não seja o tipo de pessoa que defende uma linguagem em detrimento das demais.

### 📒 É mais fácil aprender JS através de frameworks?

Não. O ECMAScript/JavaScript é o ponto de partida de todo mundo que está querendo programar. Não tente começar a partir da complexidade.

Literalmente **todo mundo** que você conhece um dia começou com um "*Hello, world!*".

## Requerimentos de Software

* Um computador
  * Um browser (Google Chrome, Firefox, Safari etc.)
  * Um editor de código (Visual Studio Code, Sublime Texto, Atom etc.)
  * Node.js (*sem etc.*)

# Aula 4: Criando seu primeiro script

Aprendemos onde a tag <style></style> fica no HTML e onde o <script></script> fica. Aprendemos também a usar o `window.alert()`, o `window.confirm()` e o `window.prompt()`.

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


# Aula 17: Próximos Passos

# O que vimos até aqui

* Fundamentos
  * O que é o JS, como ele surgiu, sua evolução, seu paradigma (client-server)
* Variáveis e dados
  * Variáveis, tipos de dados, tipos primitivos
* Operadores
  * Tratando valores com operações (operadores aritméticos, lógicos e relacionais)
* Condições
  * if/else simples, composto, aninhado
  * switch
* Repetições
  * while, do while, for
* Arrays
  * Variáveis compostas
* Funções
  * A importância das funções
* DOM
  * JS conversando com o HTML e o CSS

# Quais são os próximos passos?

* Faça o curso de HTML 5 e CSS
* Estude muito as funções
  * Arrow functions
  * callbacks
  * funções anônimas
  * IIFEs (Immediately Invoked Function Expression)
  * Fundamentos do JavaScript funcional
* Objetos
* Modularização
* RegEx
* JSON
* AJAX
* NodeJS
* Frameworks
  * JQuery
  * VueJS
  * Angular
  * ReactJS

# Fundamentos dos objetos em JavaScript

```javascript
// Arrays
let num = [5, 8, 4]

// objeto

let amigo = {
  nome: "José",
  sexo: 'M',
  peso: 85.4,
  engordar(p=0) {
    console.log('Engordou')
    this.peso += p
  }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)
```


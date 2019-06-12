# Módulo C (aulas 9 - 10)

# Aula 9: Introdução ao DOM

DOM é um acrônimo para **Document Object Model**. É um conjunto de objetos que darão acesso aos componentes internos de um website.

O DOM está estruturado em forma de árvore (tree structure) cujo ramo mais alto é o `window`:

* `window`
  * `location`
  * `document`
    * `html`
      * `head`
        * `meta`
        * `title`
      * `body`
        * `h1`
        * `p`
        * `p`
          * `strong`
        * `div`
  * `history`

## Seleção de elementos

Nesta aula, veremos 5 métodos de acesso a elementos:

* por Marca (TagName)
  
  * `getElementsByTagName()`
  
* por ID

  * `getElementById()`

* por Nome

  * `getElementsByName()`

* por Classe

  * `getElementsByClassName()`

* por Seletor CSS

  * `querySelector()`
  * `querySelectorAll()`

  

# Aula 10: Eventos DOM

## Exemplos de Eventos

Há vários tipos de eventos de interação. Os mais comuns são os de mouse, tais como, por exemplo:

* `mouseenter`: apontar o mouse dentro de um elemento
* `mousemove`: mover o mouse dentro da área do elemento
* `mousedown`: clicar e segurar o botão esquerdo do mouse no elemento
* `mouseup`: soltar o botão esquerdo do mouse
* `click`: clique normal dentro do elemento
* `mouseout`: mover o mouse para fora do elemento

## Funções (ou funcionalidades)

São um conjunto de códigos que só são executados quando um determinado evento ocorrer.

Esses conjuntos são também chamados de blocos e são delimitados por chaves (`{}`).

```javascript
function nomeDaAção(parâmetro) {
	// aqui fica o código da função.
}
```


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

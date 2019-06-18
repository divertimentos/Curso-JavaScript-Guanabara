# Módulo D: Condições em JavaScript

# Aula 11: Condições (Parte 1/2)

## Sequências x Condições

### Sequências

Sequências de códigos são construídas para que todas as linhas sejam executadas e em ordem.

```javascript
// Sequência:
var n = 3
n += 2
window.alert(n)
```

### Condições (if/else)

Já as condições definem caminhos lógicos, distintos, pelos quais a linguagem irá interpretar o código escrito.

```javascript
if (condição) {
    // quando o if for true
} else {
    // quando o if for false
}

```

Existem alguns tipos de condição. Nesta aula, veremos dois deles.

```javascript
// Condição simples:
if (condição) {
    true
}

// Condição composta:
if (condição) {
    true
} else {
    false
}
```

## Divertimentos:

Em aula transformamos o **[divertimento_08.js](https://github.com/guiemi-learning-center/curso-javascript-guanabara/blob/master/modulo_d/11_Condicoes_Parte_Um/divertimento_08.js)** em um site. Transforme o **[divertimento_09.js](https://github.com/guiemi-learning-center/curso-javascript-guanabara/blob/master/modulo_d/11_Condicoes_Parte_Um/divertimento_09.js)** em um site.

And there it goes: **[divertimento_11.html](https://github.com/guiemi-learning-center/curso-javascript-guanabara/blob/master/modulo_d/11_Condicoes_Parte_Um/divertimento_11.html)**

# Aula 12: Condições (Parte 2/2)

## Condições aninhadas (else if)

```javascript
if (condiçãoUm) {
    blocoUm
} else {
    if (condiçãoDois) {
        blocoDois
    } else {
        blocoTrês
    }
}
```

## Condições múltiplas (Switch)

Serve para valores fixos.

```javascript
// Sintaxe do Switch:
switch(expressão) {
  case valor1:
    //
    break
  case valor2:
    //
    break
  case valor3:
  	//
    break
  default:
        //
}
```


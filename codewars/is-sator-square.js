/*---------RESOLVER--------
Información
1. Muestra un mensaje en cuatro direcciones
2. up-down (Abajo)
3. down-up (Arriba)
4. left-right (De Frente)
5. rigth-left (Contrario)
6. Todas las palabras se pueden leer en las 4 direcciones
7. Si una palabra no cumple entonces no es
8. 2x2 <= N <= 33x33 --> 4 <= N <=1.089
9. Todas las letras son del alfabeto ingles en mayusculas
10. No se necesita validar la entrada
11. La tabla es cuadrada NxN
12. La respuesta es boolean true o false
13. 

Preguntas
1. 

Casos de Uso
No aplica dado qe no debemos hacer validaciones

Diseño
1.  recorra la tabla por filas en orden de 0 a lenght
2.      tome la fila de la tabla
2.      invierta la dirección de la fila
3.      vulva la fila en cadena de texto
4.      recorra de nuevo la tabla por filas, pero omitiendo la fila actual
5.          tome la fila de la tabla
6.          vuelva la fila en cadena de texto
7.          compare los dos textos si son iguales 
8.              sí: entonces frena el procesoso y retorna true
9.          si ya terminó de recorrer las filas 
10.             sí: entonces retorna false
11.     si la respuesta es false entonces frena el proceso y devuelve false
12.     si ya recorrio todas las filas
13.         sí: entonces retorna true
14.     continua con la siguiente fila y repite apartir del 2
15. si la repuesta es false entonces frena el proceso y devuelve false
16. invierta la tabla filas=columnas y columnas=filas
17. repita los pasos apartir del 1 al 15
18. termina y devuelva true
*/

/*---------APRENDIZAJE----------

1 Recorrer una matriz:
necesitamos recorrer 2 veces la tabla o la tabla y la fila, depende de la necesidad que se tenga,
supongamos que el i es indice del primer bucle y que j es el indice para el segundo bucle.
Para los siguientes casos nos situamos dentro del segundo bucle:

1.1 Rocrrer por filas (0 a length) accediendo a los valores de 0 hasta length
accedemos al valor de la matriz colocando primero i y luego j 
de esta forma matriz_ejemplo[ i ][ j ] así forma recorremos en el 
segundo bucle todos los elementos de la fila y en el primer 
bucle cambiamos de fila.

1.2 Rocrrer por columnas (0 a length) accediendo a los elementos de 0 hasta length
accedemos al valor de la matriz colocando primero j y luego i
de esta forma matriz_ejemplo[ j ][ i ] de esta forma recorremos 
en el segundo bucle todos los elementos de la columna y en el
primer bucle cambiamos de columnas.

1.3 Recorrer las filas (0 a length) accediendo a los elementos de length hasta 0
Accedemos al valor de la matriz colocando en el primer corchete i y en el 
segundo corchete la formula matriz_ejemplo.length - j - 1, al final debe quedar
matriz_ejemplo[ i ][ matriz_ejemplo.length - j - 1 ]

1.4 Recorrer las filas (length a 0) accediendo a los elementos de length hasta 0
Accedemos al valor de la matriz colocando en el primer corchete matriz_ejemplo.length - i - 1 
y en el segundo corchete la formula matriz_ejemplo.length - j - 1, al final debe quedar
matriz_ejemplo[ matriz_ejemplo.length - i - 1 ][ matriz_ejemplo.length - j - 1 ]

1.5 Recorrer las columnas (0 a length) accediendo a los elementos de length hasta 0
Accedemos al valor de la matriz colocando en el primer corchete matriz_ejemplo.length - j - 1 
y en el segundo corchete i, al final debe quedar 
matriz_ejemplo[ matriz_ejemplo.length - j - 1 ][ i ]

1.6 Recorrer las columnas (length a 0) accediendo a los elementos de length hasta 0
Accedemos al valor de la matriz colocando en el primer corchete matriz_ejemplo.length - j - 1
y en el segundo corchete la formula matriz_ejemplo.length - i - 1, al final debe quedar
matriz_ejemplo[ matriz_ejemplo.length - j - 1 ][ matriz_ejemplo.length - i - 1 ]

*/

const list_input_f = [
    ['P', 'A', 'R', 'T'],   //0
    //0  //1  //2  //3
    ['A', 'G', 'A', 'R'],   //1
    ['R', 'A', 'G', 'A'],   //2
    ['T', 'R', 'A', 'M']    //3
]

const isSatorSquare = () => {
    return 'No logre resolverlo'
}

//The best answers
const isSatorSquare1 = tablet => {
    return tablet.every((row, y) => 
        row.every((v, x) => 
            tablet[x][y] == v && 
            tablet[row.length - x - 1][tablet.length - y - 1] == v
        )
    );
}

function isSatorSquare2(tablet) {
    for (let i = 0; i < tablet.length; i++) {
        for (let j = 0; j < tablet[i].length; j++) {
            if (tablet[i][j] !== tablet[tablet.length - 1 - i][tablet[i].length - 1 -j ]) {
                return false;
            }
            if(tablet[i][j] !== tablet[j][i]) {
            return false;
            }
        }
    }
    return true;
}

module.exports = isSatorSquare
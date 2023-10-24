/*-----------RESOLVER-----------
Informacion
1. las entradas son una matriz, una coordenada, la celda dada, y una palabra
2. cada celda es como una casa y sus respectivos vecinos
3. primer tipo de vecindad: barrio de Moore son ocho celdas que rodean una celda dada
4. segundo tipo de vecindad: barrio de Von Neumann las cuatro celdas que comparten limite con la celdad dada
5. la matriz solo puede tener un tipo de vecindad
6. se debe devolver la lista de vecinos de la celda dada
7. el orden de la respuesta no tiene relevancia
8. si las coordenadas dadas no se encuentran en la matriz devuelva una lista vacia
9. si la matriz está vacia devuelva una lista vacía
10. las coordenadas (x,y) donde x es para la capa superior (filas), y es para la capa interior (columnas)
11. la respuesta son los elementos en las celdas, no las coordenadas
12. si la celda dada está al borde entonces se retorna los elementos cercanos que estén dentro de la matriz
13. 

Preguntas
1. la matriz es cuadrática?
2. la entrada que indica el tipo de vecindario siempre será tipo string?
3. que deberia ocurrir si no coinciden los caracteres con la palabra que determina el tipo de vecindario?
4. las coordenadas son una lista o cual es tipo de dato?

Casos de uso
1. las coordenadas vienen negativas
2. 

Diseño
1. debo recorrer la matriz de dos formas
1.1 Moore en cuadrado al rededor de la celda dad
1.2 Von_Neumann en crus izquierda, arriba, derecha y abajo de la celda dada
2. debo tomar las coodenadas y generar una formula para el comportamiento del paso 1
3. debo tener una lista para almacenar los vecinos
4. debo crear las validaciones dadas, en las que devuelvo la lista vacia
*/


const cellularNeighbourhood = ( neighbourhood_type, neighbourhood, coordinates) => {
    const response = []
    const N = neighbourhood.length
    const M = neighbourhood[0].length
    let valor_i = null
    let valor_j = null
    let limit_i = null
    let limit_j = null

    if ( N === 0 ) return response
    if ( 0 > coordinates[0] || coordinates[0] >= N ) return response
    if ( 0 > coordinates[1] || coordinates[1] >= M ) return response
    
    valor_i = coordinates[0] > 0 ? coordinates[0] - 1 : coordinates[0]
    limit_i = coordinates[0] < (N-1) ? coordinates[0] + 2 : 
        (coordinates[0] == (N-1)) ? coordinates[0] + 1 : coordinates[0]  
    valor_j =  coordinates[1] > 0 ? coordinates[1] - 1 : coordinates[1]
    limit_j = coordinates[1] < (M-1) ? coordinates[1] + 2 : 
        (coordinates[1] == (M-1)) ? coordinates[1] + 1 : coordinates[1]

    for(let i = valor_i; i < limit_i; i++) {
        for (let j = valor_j; j < limit_j; j++) {           
            response.push(neighbourhood[i][j])
            if(neighbourhood_type === 'von_neumann') {
                if (i != coordinates[0]) {
                    if (j != coordinates[1]) response.pop()
                }
            }
            if ( coordinates[0] == i ) {
                if (coordinates[1] == j) response.pop()
            }                     
        }
    }

    return response
}

module.exports = cellularNeighbourhood
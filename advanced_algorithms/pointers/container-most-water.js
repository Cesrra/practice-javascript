/*------RESOLVER------
Información
1. recibe una lista de números
2. cada número representa el largo de una línea
3. encontrar las dos líneas más largas para formar 
un contenedor de agua
4. devolver la cantidad máxima de agua que puede 
almacenar el contenedor
5. los valores repetidos no se tendrán en cuenta

Preguntas
1. La lista puede venir vacía?
2. los valores de la lista son enteros validos?
3. pueden haber negativos?
4. se trabaja sólo con enteros?
5. se pueden repetir los valores?

Diseño
1. crear dos apuntadores 
1.1 se para alfinal de la lista arr.length
1.2 se para al inicio de la lista 0
2. crear dos variables para las lineas más largar inician en 0
3. recorrer la lista mientras los apuntadores sean diferentes
4. comparar si el valor en cada apuntador es mayor al de las variables
    4.1 comparar si los valores de los apuntadores son iguales
    4.1.1 si son iguales sólo guardar el del apuntador del inicio
    4.2 si el valor del apuntador es mayor entonces guardar cada valor en una variable respectivamente
5. de lo contratrio no hacer nada
    FIN del CICLO
6. retornar la multiplicación de las dos variables
*/



/*------APRENDIDO------
1. Math.min() recibe 2 parámetros y devuelve el de menor valor
2. Math.max() recibe 2 parámetros y devuelve el mayor valor
3. para aumentar el valor de una variable no se puede hacer
en la misma linea del condicional
4. para hallar la distanci entre dos puntos, se toma el valor
del punto más lejano y se resta el punto más cercano

*/

///Mi solución
const containerMostWater = (arr=[]) => {
    let point_start = 0
    let point_end = arr.length - 1
    let max_1 = null
    let max_2 = null
    do {
        if (max_2 != arr[point_start] && max_1 != arr[point_end]) {
            if (arr[point_start] > max_1) {
                max_1 = arr[point_start]
            }
            if (arr[point_end] > max_2) {
                max_2 = arr[point_end]
            }
        }
        point_end--
        point_start++
    } while ( point_start < arr.length/2 );
    
    return max_1 < max_2 ? max_1*max_1 : max_2*max_2
}

///Mejor solución
const containerMostWater2 = (arr=[]) => {
    let point_start = 0
    let point_end = arr.length - 1
    let max_area = 0

    while (point_start < point_end) {
        const current_area = ( point_end - point_start ) * Math.min(arr[point_start], arr[point_end])
        max_area = Math.max(max_area, current_area)
        if (arr[point_start] <= arr[point_end]) {
            point_start++
        } else {
            point_end--
        }
    }

    return max_area
}

module.exports = containerMostWater2
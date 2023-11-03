/*------RESOLVER------
Información
1. recibe una matriz de m x n
2. son enteros los valores
3. las filas estan ordenados de forma ascendente -->
4. el primer elemento de la siguiente fila
es mayor que el ultimo elemento de la fina anterior
5. se nos da un target que se debe buscar
6. retornar true si se encuentra, false de lo contrario

Preguntas
1. la matriz puede venir vacia?
2. todos los elementos de la matriz son números enteros positivos?
3. el target puede venir vacio?
4. el target es un valor entero positivo?
5. la respuesta es de tipo boolean?
6. son cuadradas las matices? supongo que no por el mxn
7. los numeros no se repiten?

Diseño
1. declaro el p1 = 0; p2 = arr[p1].length - 1; mit
2. mientras p1 <= p2
3. mit = arr[p1][p2]
4. si mit == target return true
5. si mit < target -> p1++
6. si no p2 --
    Fin Mientras
7. return false
*/
// console.log(`p1 = ${p1}, p2 = ${p2}, mit = ${mit}`)
const search2dArray = (arr, target) => {
    let p1 = 0
    let p2 = arr[p1].length -1
    let mit
    
    while (p1 <= p2 && p1 <= arr.length-1) {
        mit = arr[p1][p2]        
        if (mit == target) return true
        if (mit < target) {
            p1++
        } else {
            p2--
        }
    }
    return false
}

module.exports = search2dArray
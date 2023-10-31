/*---------RESOLVER--------
Información
1. recibe un array para ordenar
2. se espera una posición específica de donde se inicia el ordenamiento
3. se ordena de forma ascendente
4. opcionalmente puede recibir la cantidad de elmentos a ordenar
5. si no recibe el parametro opcional o es igual a cero se toman todas las demás pociciones
6.

Preguntas
1. qué pasa si el array biene vacio?
2. qué ocurre si algun elemento no es un tipo númerico válido?
3. qué ocurre si no viene un array?
4. qué ocurre si el no envian paramétros
5. qué debe ocurrir si no recibe le segundo parametro
6.

Diseño
1. tomar la porcion del array original
1.1 desde start hasta length
2. ordenar esa porción de forma ascendente
3. ingresar los elementos de la porción tomada al array orignal
4. retornar el nuevo array

*/

/*---------APRENDIZAJE----------
1. SPLICE: muta el array original, tomando una porción desde la posición del
param1, tomando la cantidad de lementos que indique el param2 desde el param1.
Si el param2 no es proporcionado entonces tomará todos los elementos hasta el final.
El param2 debe ser numérico o un string que se pueda parcear a número. de lo contrario 
no tomará la porción.
Retorna un nuevo array con la porción tomada y el array original queda con los elementos
que no fueron tomados.

2. SLICE: no muta el array original, tomando una porción desde la posición del
param1, tomando la cantidad de lementos que indique el param2 desde el primer elemento.
Si el param2 no es proporcionado o es undefined entonces tomará todos los elementos hasta el final.
si el param2 es null o menor o igual al param1 entonces retorna un array vacio.
si los parámetros son bien proporcionados retornara un arracy con la porcion del 
indicada del array original.

3. condicion corta para obtener el valor de una variable que sea diferente a null, 
undefined, NaN, '' y false.
( arr.length || length ) ==> evalua el primer parámetro si es diferente de los valores
mencionados entoces retorna el valor de esa variable. Si no cumple la condición entonces
procede a realizar lo mismo con el segundo para métro, y así segun los parametros introducidos
retorna undefined si los valores de los parámetros son iguales a los indicados o
si la condición expresada no se cumple.
*/

const setSort = (arr=[], start, length) => {
    let end
    const arr_end = []
    if (length > 0) {
        end =  length + start
        arr_end.push(...arr.splice(end))
    }else {
        end = arr.length
    }
    const arr_middle = arr.splice(start,end)
    arr_middle.sort((a,b) => a-b)
    return  [...arr, ...arr_middle, ...arr_end]
}

//Best Solution
function setSort2(arr, start, length) {
    var len = (length || arr.length) + start;
    return [].concat(
        arr.slice(0, start),
        arr.slice(start, len).sort((a,b) => a-b),
        arr.slice(len)
    );
  }

module.exports = setSort
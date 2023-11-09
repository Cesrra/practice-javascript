/* ------RESOLVER------
Información
1. digit_root = dr = es la suma de los digitos de un número
ejemplo: dr = 749 = 7 + 4 + 9 = 20
2. deeper square double digit root de un entero n = dsddr =
es la suma of las raices cuadradas de cada digito de digit_root
ejemplo: dsddr = 749 = 2^2 + 0^2 = 4
3. se define la función f como
f(n) = dr(n) + dsddr(n)
4. recibe 2 arrays de enteros positivos, arr1 y arr2
5. tienen diferentes longitudes
6. tienen elementos en comun
7. se requiere devolver un array (res), con los elementos comunes
que aparecen una vez (repetidos)
8. pasarlos por la función f
9. ordenarlos de forma descendente segun el resultado equivalente de f(n)
10. si hay coincidencias con f(res[i]), el numero res[1] va primero
11. los arr1 y arr2 siempre serán entradas válidas en todos sus elementos

Ejemplos
arr1 =  [5, 56, 28, 35, 12, 27, 64, 99, 18, 31, 14, 6]
arr2 =  [28, 17, 31, 63, 64, 5, 18, 17, 95, 56, 37, 5, 28, 16]
1.      [64, 5, 18, 56, 28, 31] los elementos comunes en los dos arrays 
2. la tabla se los respectivos valores de f(n)
n        f(n)
64        11
5         30
18        90
56        13
28        11
31        20
3. [18, 5, 31, 56, 28, 64] sería el resultado
---------------------------------------------------------------------------
[5 , 56, 28, 35, 12, 27, 64, 99, 18, 31, 14, 6 ]
[28, 17, 31, 63, 64, 5 , 18, 17, 95, 56, 37, 5 , 28, 16]
[64, 5 , 18, 56, 28, 31]

[95, 64, 63, 56, 37, 31, 28, 28, 18, 17, 17, 16, 5 , 5 ] big
[99, 64, 37, 35, 31, 28, 27, 18, 14, 12, 6 , 5 ] small

res [] = [18, 5, 31, 56, 28, 64]

            i       0   1   
         i + 1      1   2
            p1      0   1
            p2      0   1
            mit     und 1 
            temp  null  95
    big_arr[i]      95  64
    small_arr[p2]   99  99
    small_arr[mit]  und 64  
  0   1   2   3   4   5   6   7   8   9   10  11  12  13
[95, 64, 63, 56, 37, 31, 28, 28, 18, 17, 17, 16, 5 , 5 ] big
[99, 64, 56, 35, 31, 28, 27, 18, 14, 12, 6 , 5 ] small

Pegruntas
1. 

Diseño
1. ordenar las matrices de forma descendente
2. revisar cual es el array más grande
2.1 guardar en limit_length el length de ese array
2.2 igualar el big_arr = al array más grande
2.3 igualar el small_arr = al array más pequeño
3. crear array res 
4. crar un temp que almacene el big_arr[i]
5. definimos para qué se utilizará cada variable
p1 = i -> dentro del bucle sabe la pocisión del big_arr al final de la hiterción
p2 -> dentro del bucle sabe la pocisión del small_arr al final de la hiterción
mit -> dentro del bucle se encarga de la pocisión del array que se necesite
temp -> guarda la pocisión de la hiteración anterior
6. elements, obtener los elementos que se repiten en los dos arrays ordenados de forma descendente
7. pasar cada elements por la función f(element)
8. crear un obj que sea { element: f(element) } (ElementsAndF)
9. crear y ordenar de forma descendente un array de los f(element) (FDeElements)
10. recorrer FDeElements y guardar en res el ekivalente de ElementsAndF[ FDeElements[i] ]
11. if (ElementsAndF[ FDeElements[i-1] ] == ElementsAndF[ FDeElements[i] ])
12. guardamos primero el FDeElements[i] más grande
13. retornamos el array res
*/
const sortDescendant = (arr) => arr.sort((a,b) => b-a)

const getBigSmallArrays = (arr1, arr2) => {
    const big_arr = []
    const small_arr = []

    if (arr1.lengt >= arr2.length) {
        big_arr.push(...sortDescendant(arr1))
        small_arr.push(...sortDescendant(arr2))
    } else {
        big_arr.push(...sortDescendant(arr2))
        small_arr.push(...sortDescendant(arr1))
    }
    return [big_arr, small_arr]
}

const getDuplicatedElements = (big_arr, small_arr) => {
    let p2 = 0, mit, temp
    const res = []

    for (let i = 0; i < big_arr.length; i++) {
        // console.log('-------------------------------------',i, p2, temp)
        // console.log('Antes del tamp ', temp, big_arr[i],small_arr[p2], i, p2)
        if (big_arr[i] != temp) {
            if (big_arr[i] == small_arr[p2]) {
                res.push(big_arr[i])
                // console.log('Insertar 1', big_arr[i])
            } else if (big_arr[i] < small_arr[p2]) {
                mit = p2
                while (big_arr[i] < small_arr[mit]) {
                    mit++ //1
                }
                if (big_arr[i] == small_arr[mit]) {
                    res.push(big_arr[i])
                    // console.log('Insertar 2', big_arr[i])
                    // if (small_arr[mit] > big_arr[i+1]) {
                    //     p2 = mit + 1
                    // }
                    p2 = mit
                }
            } else {
                mit = i
                while (small_arr[p2] < big_arr[mit]) {
                    mit++ //1
                }
                if (small_arr[p2] == big_arr[mit]) {
                    res.push(big_arr[mit])
                    // console.log('Insertar 3', big_arr[mit])
                    // console.log(small_arr[p2], p2, mit)
                    // temp = big_arr[mit]
                    // i = mit
                    // if (big_arr[mit] > small_arr[p2+1]) {
                    //     // i = mit +1
                    // } 
                }
                i = mit
            }
        }
        // else {
        //     console.log('Debí hacer algo', i,p2,)
        // }
        temp = big_arr[i]
        // console.log('---FIN--- temp ahora es = ',temp, ' y p2 = ',p2)
    }

    return res
}

const functionF = (arr) => {
    const elements_and_f = {}
    const f_of_elements = []

    const sum_operations = (element_string, callback) => {
        
        let resp = 0
        for(let j = 0; j < element_string.length; j++) {
            const element_num = parseInt(element_string[j])
            resp += callback(element_num)
        }
        return resp
    }

    for(let i = 0; i < arr.length; i++) {
        const element_string = arr[i].toString()
        const dr = sum_operations( element_string, (a) => a )
        // console.log('dr ', dr)
        const dsddr = sum_operations( dr.toString(), (a) => a*a )
        // console.log('dsddr ', dsddr)
        const f_of_arrI = dr + dsddr

        // console.log('------------------------------')
        // console.log(dr, dsddr, arr[i].toString())
        elements_and_f[`${f_of_arrI}${arr[i]}`] = arr[i]
        // f_and_elements[`${arr[i]}`] = f_of_arrI
        f_of_elements.push(f_of_arrI)
        // console.log(arr[i])
    }
    // console.log('antes ', elements_and_f)
    sortDescendant(f_of_elements)
    // console.log('despues ', f_and_elements)
    return {elements_and_f, f_of_elements }
}

const sortedCommByDigs = (arr1=[], arr2=[]) => {
    const res = []
    const [big_arr, small_arr] = getBigSmallArrays(arr1, arr2)
    const elements = getDuplicatedElements(big_arr, small_arr)
    const { elements_and_f, f_of_elements } = functionF(elements)
    const elements_and_f_copy = {...elements_and_f}
    console.log('primer recorrido ', f_of_elements)
    console.log('segundo recorrido ', elements)
    console.log('obj para acceder ', elements_and_f)
    for (let i = 0; i < f_of_elements.length; i++) {
        for ( let j = 0; j < elements.length; j++) {
            // console.log('ANtes ',elements_and_f[`${f_of_elements[i]}${elements[j]}`])
            if ( elements_and_f[`${f_of_elements[i]}${elements[j]}`] ) {
                // console.log('entro ', elements_and_f[`${f_of_elements[i]}${elements[j]}`])
                res.push(elements_and_f[`${f_of_elements[i]}${elements[j]}`])
                delete elements_and_f[`${f_of_elements[i]}${elements[j]}`]
                break
            }
        }
    }
    
    return res
}

module.exports = sortedCommByDigs
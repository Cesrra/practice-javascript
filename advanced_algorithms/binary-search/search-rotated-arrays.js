/*------RESOLVER------
Información
1. recibe una lista ordenada de forma ascendente
2. recibe un valor para buscar (target)
3. esta lista está rotada en un indice 
4. esta rotación hace que los valores apartir
del indice pivote, incluido, hasta el length -1
estén de primeros en el array y los valores del pivote,
sin incuirlo, hacia 0 estén luego.
5. la lista son de enteros y distintos entre ellos
6. devolver el indice del target o -1 si no está

Preguntas
1. pueden ser los valores negativos?
2. puede venir el array vacio?
3. puede traer elementos distintos a números?
4. 

Diseño
1. crear los apuntadores P1 = 0 y P2 = arr.length -1, m = (P1+P2)/2
2. realizar mientras (condición) 
3. si arr[P1] == target, termina y retorno P1
3.1 si arr[P2] == target, termina y retorno P2
3.2 si arr[m] === target, termina y retorno m
4. si arr[m] > target &&  arr[P2] > target // Derecha
4.1 P1 = m + 1, p1 == p2 -> (m - 1 == target -> si return m-1, no return -1)
5. arr[P1] < target // Izquierda
5.1 P2 = m - 1, p1 == p2 -> (m - 1 == target -> si return m-1, no return -1)
6. si no se cumplen las dos condiciones anteriores retornar -1
7. m = (p1+P2)/2 
target=5; p1; p2; m;    // 
          0   7   4
[4,5,6,7,0,1,2]            
 0 1 2 3 4 5 6
 // target 6

[12,13,9,10,11]
  0  1 2  3  4   t = 10
*/

//////MEJOR SOLUCIÓN
const searchRotatedArrays = (arr, target) => {
    let p1 = 0
    let p2 = arr.length -1
    let m

    while (p1 <= p2) {
        m = Math.round((p1+p2)/2)
        if (arr[m] == target) return m

        if (arr[m] >= arr[p1]) {
            if (target >= arr[p1] && target < arr[m]) {
                p2 = m - 1
            } else {
                p1 = m + 1
            }
        }else {
            if (target <= arr[p2] && target > arr[m]) {
                p1 = m + 1
            }else {
                p2 = m - 1
            }
        }
    }
    return -1
}
///MI SOLUCION
const searchRotatedArrays2 = (arr, target) => {
    let p1 = 0
    let p2 = arr.length -1
    let m 
    const no_founded = -1
    for(let i=0; i < arr.length; i++) {
        m = mCalculate(p1, p2)
        if (arr[p1] == target) return p1
        if (arr[p2] == target) return p2
        if (arr[m] == target) return m
        if (arr[m] > target &&  arr[p2] > target) {
            p1 = m + 1
            if (p1 == p2) {
                if (arr[m - 1] == target) {
                    return (m-1)
                } else {
                    return no_founded
                }
            }
        } else if (arr[p1] < target) {
            p2 = m - 1
            if (p1 == p2) {
                if (arr[m - 1] == target) {
                    return (m+1)
                } else {
                    return no_founded
                }
            }
        } else {
            return no_founded
        }
        
    }
    return no_founded
}

const mCalculate = (p1, p2) => Math.round((p1+p2)/2)

/*------APRENDIDO------
1. 

*/

module.exports = searchRotatedArrays
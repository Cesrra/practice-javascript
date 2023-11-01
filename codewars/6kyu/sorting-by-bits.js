/* ------RESOLVER------
Información
1. recibe un array de enteros de 32-bit para ser ordenado
2. se ordenan de forma ascendente deacuerdo al numero de bits que equivale cada numero
3. si hay dos numeros que tengan el mismo valor de bits se compara por el valor real
4. retornar un array con los elementos ordenados

Pegruntas
1. qué ocurre si el array viene vacio?
2. qué ocurre si el parametro de la funcion no es array?
3. qué ocurre si los elementos del array no es un entero valido?
4. qué ocurre si los elementos del array se repiten?

Diseño
1. crear un objeto para almacenar los valores y bits
2. crear un array para almacenar los equivalentes en bits
3. recorrer el array guardar en el objeto como llave el real del número
y como valor la euivalencia en bit
4. guardar el valor de bits en el array
    fin bucle
5. ordenar el array de bits de forma ascendente
6. recorrer el array ordenado 
7. buscar el equivalente bit al elemento
8. sy
}

[7, 6, 15, 10, 8]        [8, ]
[3, 2,  4,  2, 1] sort-> [1, 2, 2, 3, 4]

/////////////////////// FALLÓ ///////////////////////
1. crear un objeto temporal de comparacion (temp_compare)
2. recorrer el array
3. guardar la equivalencia en bit (bit_value)
4. si temp_compare.bit !== null, hacer comparacion de bit_value con temp_compare.bit
5. si bit_value es menor, paso el elemento actual a la posición anterior y el elemento 
anterior a la posición actual y cambio los vcalores de temp_compare por los del elemento
6. si bit_value es igual, comparamos los reales element con tem_compare.real
    6.1 si element es menor, hacemos el paso 5
    6.2 si element es mayor o igual, no hacemos nada 
7. si bit_value es mayor, no hacemos nada 
8. si temp_compare.bit == null, almacenar el bit_value y element en temp_compare bit y value
respectivamente

Prueba
1 --> temp_compare.bit = null; temp_compare.real = null; element = 7; bit_value = 3; arr[7, 6, 15, 8]; i = 0
2 --> temp_compare.bit = 3; temp_compare.real = 7; element = 6; bit_value = 2; arr[7, 6, 15, 8] -> arr[6, 7, 15, 8]; i = 1
3 --> temp_compare.bit = 2; temp_compare.real = 6; element = 15; bit_value = 4; arr[7, 6, 15, 8]; i = 2
4 --> temp_compare.bit = 2; temp_compare.real = 6; element = 8; bit_value = 1; arr[7, 6, 15, 8] -> arr[7, 6, 8, 15]; i = 3
fin --> temp_compare.bit = 1; temp_compare.real = 8; element = undefined; bit_value = undefined; arr[7, 6, 8, 15]; i = undefined


*/

/* ------APRENDIDO------
1. Se debe evaluar el patron de comportamiento que se repite siempre en los casos de ecepción
puedo utilizar restar, sumar, dividir e incluso hacer una formula para poder resolverlo
y esa formula poder simplificarla con factorización
2. el toString() me permite convertir un numero al sistema que necesite, pasando le el número de ese sistema númerico
3. puedo ordenar con sort usando los valores a y b, sin mutar el valor real del array
peritiendo que organice deacuerdo a la formula que halle pero sin cambiar los valores
*/

const sortByBit = ( arr ) => {
    arr.sort((a,b) => a-b)
    const compare_obj = {}
    const compare_array = []
    const response = []
    arr.map((element, i) => {
        value_bit = (element).toString(2).replaceAll('0', '').length
        compare_obj[`${value_bit}-${element}`] = element
        compare_array.push(value_bit)
    })
    compare_array.sort((a,b) => a-b)
    compare_array.map((elemen) =>{
        for (let index = 0; index < arr.length; index++) {
            const value = compare_obj[`${elemen}-${arr[index]}`]
            if (value != undefined) {
                response.push(value) 
                delete compare_obj[`${elemen}-${arr[index]}`]
            }            
        }
    })
    return response
}

////////    BETTER SOLUTION //////////
const sortByBit1 = arr => arr.sort((a, b) => a.toString(2).replace(/0/g, '') - b.toString(2).replace(/0/g, '') || a - b)
/*
const sortByBit1 = (arr) => {
    arr.sort((a, b) => {
        console.log('------------------------------------------------')
    
        console.log(`${a} = ${a.toString(2).replace(/0/g, '')}`, `;  ${b} = ${b.toString(2).replace(/0/g, '')}`)
        console.log(a.toString(2).replace(/0/g, '') - b.toString(2).replace(/0/g, ''))
        if( a.toString(2).replace(/0/g, '') - b.toString(2).replace(/0/g, '') ) {
            return a.toString(2).replace(/0/g, '') - b.toString(2).replace(/0/g, '')
        } else {
            console.log(a , b)
            return a - b
        }
    })
}
*/

module.exports = sortByBit
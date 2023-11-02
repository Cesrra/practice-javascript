/*------RESOLVER------
Información
1. recibe un string s
2. debe encontrar el valor del substring más largo
3. el substring no debe repetir caracteres
4. retornar el valor entero

Preguntas
1. es posible que el s venga vacío?
2. si el s es un valor diferente a string?
3. hay caracteres especiales?
4. puede contener espacios?
5. qué se prioriza más velocidad o almacenamiento?

Diseño
1. crear una variable (stored) para almacenar la referencia a las letras
que ya han sido revisadas
2. crear los dos apuntadores P1 y P2 y el contador (count) y max_length
3. recorrer los caracteres del s teniendo encuneta el index
4. sumar uno al count // error porque sumaria aun cuando es repetido
5. tomar el caracter y validar si existe en stored
5.1 si existe, guarde en max_length el mayor entre max_length y count, reinicie el count a cero
y mueva el P1 + 1
5.2 si no existe, almacene en stored[caracter] = index, count + 1 y siguiente hiteración
6. retornar max_length
*/

/*------APRENDIDO------
1. 

*/

const longestSubstring = ( s ) => {
    const stored = {}
    let P1 = 0
    let P2 = 0 //este es el index
    let count = 0
    let max_length = 0

    for(let index = 0; index < s.length; index++) {
        const character = s[index]
        // console.log(`count = ${count}; character = ${character}; stored[character] = ${stored[character]}; index = ${index}; P1 = ${P1}`)
        if (stored[character] != null) {
            max_length = Math.max(max_length, count)
            count = 1
            P1 = index + 1
            // console.log('reinicio')
        } else {
            count++
            // console.log('sumo')
        }
        stored[character] = index
    }

    return max_length
}

module.exports = longestSubstring
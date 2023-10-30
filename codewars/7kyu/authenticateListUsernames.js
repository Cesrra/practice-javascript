/*---------RESOLVER--------
Información
1. recibimos un array de strings
2. retornar true si todos los username cumplen los lineamientos dados
3. retorna false en caso de que no se cumpla el 2
4. los lienamientos dice que un usurname es validos si:
4.1 contiene entre 6-10 caracteres de largo
4.2 contiene almenos 1 minuscula
4.3 continen almenos un número
4.4 contiene sólo números y minusculas
5. siempre recibiras un array con almenos un string
6. 

Preguntas
1. 

Diseño
1. recorrer el array
2. tomar el string
3. validar que tenga sólo números y minúsculas
3.1 crear una exprecion regular /^[a-z0-9]+$/ 
4. validar que tenga entre 6-10 caracteres
4.1 comprovamos con el lenght
5. retorne true si cumple
6. retorne false si no cumple

*/

/*---------APRENDIZAJE----------
1. usar chatGPT para poder crear las expreciones regulares
2. se debe ser especifico para que la expreción haga exactamente lo que necesitamos
3. /^(?=.*\d+)(?=.*[a-z])[a-z\d]{6,10}$/ esta expreción cumple todas las condiciones
3.1 ^ Esto representa el comienzo del texto, buscará coincidencias desde el inicio de la cadena
3.2 (?=.*\d+) Esta es una búsqueda positiva que verifica si hay al menos un dígito (número) en la cadena:
3.2.1 ?= Indica que es una búsqueda positiva
3.2.2 .* Coincide con cualquier carácter (cero o más veces)
2.2.3 \d+ Coincide con uno o más dígitos (números)
3.3 (?=.*[a-z])  Otra búsqueda positiva que verifica si hay al menos una letra minúscula en la cadena
3.4 [a-z\d]{6,10} Esta parte de la expresión regular establece las restricciones para la longitud y el contenido de la cadena
3.4.1 [a-z\d] Coincide con cualquier letra minúscula o dígito
3.4.2 {6,10} Esto indica que la cadena debe contener entre 6 y 10 caracteres. Por lo tanto, la longitud de la cadena debe estar en este rango
3.5 $ Representa el final del texto. La expresión regular buscará coincidencias hasta el final de la cadena.

*/

const authenticateUsernames = (arr) => {
    const regex_only = /^[a-z0-9]+$/
    const regex_at_least = /^(?=.*[a-z])(?=.*[0-9]).+$/
    return arr.every( element => regex_only.test(element) && regex_at_least.test(element) && element.length >= 6 && element.length <= 10 )
}

//Best Asnwer 
const authList = (arr) => {
    return arr.every( (x) => {
      return /^(?=.*\d+)(?=.*[a-z])[a-z\d]{6,10}$/.test(x)
    })
}

module.exports = authenticateUsernames
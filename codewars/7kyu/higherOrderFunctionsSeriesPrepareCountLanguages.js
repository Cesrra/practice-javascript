/*--------RESOLVER----------
Información
1. recibimos un array de objetos, con información de desarrolladores
2. este array es un registro para la proxima reunión
3. se pide que retornemos un objeto el cual incluya el 
recuento de cada lenguaje de programación que estará en la reunión
3.1 este objeto tendra como key el nombre del lenguaje y como valor el contador
4. no importa el orden de los lenguajes
5. el valor del contador debe ser un numero válido
6. el array de entrada siempre será valido y con la misma estructura 
7. debe usar métodos como: forEach, filter, map, reduce, some, each, find, findIndex

Preguntas
1. Los registros no estan repetidos?
2. los desarrolladores sólo saben un lenguaje o varios lenguajes?
3. Qué pasa si el array viene vacio o no es array?
4. Hay desarrolladores que no sepan un lenguaje?

Casos de Uso

Diseño
1. crear un obj para guardar la respuesta
2. Recorrer cada elemento del array de entrada
3. Buscar la propiedad language y tomar su valor
4. Buscar ese valor en el obj de respuesta
5. Si no existe crear la propiedad
6. Sumarle 1 al valor de la propiedad
7. Retornar el obj de respuesta

*/

/*---------APRENDIZAJE----------
1. Se puede usar este tipo de validacion corta para retornar el valor que se desea
(count[x.language] || 0) ==> si count en la key x.language tiene un valor entonces 
retorna ese valor, si no tiene entonces retorna 0

*/

const higherOrderFunctionsSeriesPrepareCountLanguages = (list = []) => {
    // const response = {}
    const countries = {}
    const languages = {}

    list.map(({ language, country }) => {   
        languages[`${language}`] == null ? languages[`${language}`] = 1 : languages[`${language}`] += 1
        countries[`${country}`] == null ? countries[`${country}`] = 1 : countries[`${country}`] += 1
    })

    return { languages, countries } //{ language }
}

//Best response
function countLanguages(list) {
    var count = {};
    list.forEach(x => count[x.language] = (count[x.language] || 0) + 1);
    return count;
}

const countLanguages2 = list =>
	list.reduce((p,c) => {
  	p[c.language] = (p[c.language] || 0) + 1
    return p
  }, {})
module.exports = higherOrderFunctionsSeriesPrepareCountLanguages
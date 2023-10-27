/*---------RESOLVER--------
Información
1. recibe un array de objetos con la información del campeon de la champios en cada temporada
2. recibe un string con el nombre de un pais
3. retornar cuantas veces ese pais ha tenido un campeon, basado en el array de objetos
4. si el pais no ha tenido campeones entonces retornar cero

Preguntas
1. se debe retornar un tipo number?
2. el arrary siempre trae información?
3. el nombre del pais siempre se escribe igual?

Casos de uso
1.

Diseño
1. creo una variable para usarlo como contador
2. recorro el array 
3. busco la propiedad country
4. comparo si el valor de country del obj coincide con el argumento country
5. sumo uno al contador en caso de coincidir
6. retorno el contador

*/

/*---------APRENDIZAJE----------
1. Que puedo aplicar el factor comun para factorizar una operacion
const countWins = (winnerList, country) =>
  winnerList.reduce((pre, val) => pre + (val.country === country), 0);
                    saco este valor^^^^ lo multiplico con este ^^ parentecis
*/

const countWins = (winnerList, country) => {
    return winnerList.reduce( ( counter, winner ) => winner.country === country ? counter += 1 : counter += 0 , 0 )
}

module.exports = countWins
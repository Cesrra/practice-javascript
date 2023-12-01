// Importin the reto 5 data
const { person, people, cityNames } = require('./5_array_methods')

//Object Filtering
const cities = ['Bogota', 'Bucaramanga', 'Cali', 'Cucuta']
const filterPeople = (people, cities) => {
    return people.filter(
        person => cities.find( 
            city => city.trim().toLowerCase() === person.city.trim().toLowerCase() 
        )
    )
}

// Array Transformation and Reduction
const average = (people.reduce((counter, person) => counter += person.age, 0)) / people.length

// DIsplay Updated Results
// console.log(filterPeople(people, cities))
// console.log(average)
 module.exports = { average, person, people }
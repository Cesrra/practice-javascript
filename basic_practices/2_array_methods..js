// Importin the reto 1 data
const { person, people } = require('./1_array_object')

// Sorting the Array
people.sort((a, b) => a.age - b.age)

// Mapping the Array
const cityNames = people.map(pers => pers.city)

// Reducing the Array
const totalAge = people.reduce((counter, person) => counter += person.age , 0)

// DIsplay Update Results
// console.log(people, cityNames, totalAge)

module.exports = { person, people, cityNames, totalAge }
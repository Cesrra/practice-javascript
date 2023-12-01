// Importin the reto 4 data
const { person, people, cityNames } = require('./4_conditionals')

// For Loop with Conditional
const doubleAgesYoung = ( people = [] ) => {
    return people.map(person => {
        if ( person.age > 30 ) {
            person.age = person.age * 2
        }
        return person
    })
}

// Array Transformation and Filtering
const doubledAgesYoung = people.map(person => {
    if ( person.age < 30 ) {
        person.age = person.age * 2
    }
    return person
})

// DIsplay Updated Results
// console.log( doubleAgesYoung(people), doubledAgesYoung )

module.exports = { person, people, cityNames }
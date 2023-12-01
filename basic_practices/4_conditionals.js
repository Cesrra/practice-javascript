// Importin the reto 3 data
const { person, people, cityNames } = require('./3_strings')

// Conditional Statement
const checkCity = ( person ) => {
    if( person.city === people[0].city ) {
        console.log('City Match')
    } else {
        console.log('City Mismatch')
    }
}

// Object Modification
if( person.age < 30 ) {
    person.status = "Young"
}else {
    person.status = "Mature"
}

// Display Updated Results
// console.log(person)
// checkCity( person)

module.exports = { person, people, cityNames }
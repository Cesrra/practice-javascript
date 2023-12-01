// Importin the reto 2 data
const { person, people, cityNames } = require('./2_array_methods.')

// Concatenation
const full_name = `${people[0].name} ${person.name}`

// Substring Extracting
const substraction = full_name.substring(4, 7)

//String Transformation
const uppercase_substraction = substraction.toUpperCase()

// Display Results
// console.log(`${substraction}${uppercase_substraction}`)

module.exports = { person, people, cityNames }
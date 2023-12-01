// Create an Object
const person = {
    name: 'Person 1',
    age: 15,
    city: 'Giron'
}

// Modify the Object
person.age = 25

// Create an Array of Objects
const people = [
    {
        name: 'Person 2',
        age: 36,
        city: 'Bucaramanga'
    },
    {
        name: 'Person 3',
        age: 17,
        city: 'Bogota'
    }
]

// Add an Object to the Array
people.push({
    name: 'Person 4',
    age: 50,
    city: 'Cartagena'
})

// Filter the Array
const resp = people.filter(person => person.age > 20)

// Display Results
// console.log(person, people)

module.exports = {person, people }
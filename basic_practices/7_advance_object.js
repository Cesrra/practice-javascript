// Generated people data
const people = [
    { name: 'Person 1', age: 34, city: 'Cali' },
    { name: 'Person 2', age: 15, city: 'Bogota' },
    { name: 'Person 3', age: 20, city: 'Bogota' },
    { name: 'Person 4', age: 41, city: 'Cartagena' },
    { name: 'Person 5', age: 62, city: 'Bucaramanga' },
    { name: 'Person 6', age: 50, city: 'Cartagena' }
  ]

// Object Transformation
const transformPeople = (people = []) => {
    return people.map(person => {
        if(person.age < 25) {
            person.category = 'Young'
        }else if (person.age <= 50) {
            person.category = 'Adult'
        }else {
            person.category = 'Senior'
        }
        return person
    })
}

// Object Sorting
const trasformedAndOrderedPeople = transformPeople(people).sort((a, b) => a.age - b.age)

console.log( trasformedAndOrderedPeople )
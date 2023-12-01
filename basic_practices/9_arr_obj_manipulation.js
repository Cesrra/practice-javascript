// Importing necesary data
const { people, deleteRepeted } = require('./8_array_manipulation')

// Helper Functions
const take_contries = (people) => {
    return people.map(person => person.address.country) 
}

const clear_countries = deleteRepeted(take_contries(people))

// Array Grouping and Transformation
const groupPeopleByCountry = (people) => {
    const response_obj = {}
    clear_countries.map(country => {
        const people_in_country = people.filter(person => {
            if (person.address.country === country) {
                person.fullName = `${person.name}${person.age}`
                return person
            }
        })
        response_obj[country] = people_in_country
    })
    return response_obj
}

// Array Aggregation and Sorting
const averageAgeByCountry = (people_countries = {}) => {
    const respon_obj = {}
    for(const [coutry, people] of Object.entries(people_countries)) {
        const average = (people.reduce((counter, person) => (counter += person.age), 0)) / people.length
        respon_obj[coutry] = average
    }
    //Object.entries(respon_obj).sort((a, b) => b[1] - a[1])
    return Object.fromEntries(
        Object.entries(respon_obj).sort((a, b) => b[1] - a[1])
    )
}

const group_people_by_country = groupPeopleByCountry(people)
const gropu_countries_average = averageAgeByCountry(group_people_by_country)

console.log(groupPeopleByCountry(people))
console.log(gropu_countries_average)
// Initial Data
const people = [
    { name: 'Person 1', age: 34, address: { city: 'Cali', country: 'Colombia' } },
    { name: 'Person 2', age: 15, address: { city: 'Bogota', country: 'Colombia' } },
    { name: 'Person 3', age: 20, address: { city: 'Bogota', country: 'Colombia' } },
    { name: 'Person 4', age: 41, address: { city: 'Cartagena', country: 'Colombia' } },
    { name: 'Person 5', age: 62, address: { city: 'Bucaramanga', country: 'Colombia' } },
    { name: 'Person 6', age: 50, address: { city: 'Cartagena', country: 'Colombia' } },
    { name: 'Person 7', age: 28, address: { city: 'New York', country: 'USA' } },
    { name: 'Person 8', age: 45, address: { city: 'Los Angeles', country: 'USA' } },
    { name: 'Person 9', age: 38, address: { city: 'Miami', country: 'USA' } },
    { name: 'Person 10', age: 55, address: { city: 'London', country: 'UK' } },
];

const take_cities = (people) => {
   return people.map(person => person.address.city) 
}

const deleteRepeted = (arr) => {
    return arr.reduce((counter, element) => {
        if (!counter.includes(element)) {
            counter.push(element)
        }
        return counter
    }, [])
}

const clear_cities = deleteRepeted(take_cities(people))

// Array Transformation and Agregation


const averageAgeByCity = ( people = [] ) => {
    const response_obj = {}
    clear_cities.map(city => {
        let times_city_appear = 0
        const sum_ages = people.reduce((counter, person) => {
            if(person.address.city === city) {
                counter += person.age
                times_city_appear++
            }
            return counter
        }, 0)
        const average_age_of_city = sum_ages / times_city_appear
        response_obj[city] = average_age_of_city
    })
    return response_obj
}

//Array Filtering and Sorting
const oldestPersonByCity = (people) => {
    const temp_people = [...people]
    const response_array = []
    clear_cities.map(city => {
        temp_people.sort((a, b) => b.age - a.age)
        const person_older = temp_people.find(
            person => person.address.city === city
        )
        response_array.push(person_older)
    })
    return response_array.sort((a, b) => b.age - a.age)
}

// Display Updated Results
// console.log( averageAgeByCity(people) )
// console.log( oldestPersonByCity(people) )


module.exports = { people, take_cities, deleteRepeted }



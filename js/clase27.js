// Clase27 - Como funciona el tiempo en javascript y Callbacks
/* console.log('a')
setTimeout(() => console.log('b'), 0)
console.log('c') */

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = "people/:id"
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }
const onPeopleResponse = function(people) {
    console.log(`Hola yo soy ${people.name}`)
}
$.get(lukeUrl, opts, onPeopleResponse)
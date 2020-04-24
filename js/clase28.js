// Clase28 - Haciendo múltiples requests
/* console.log('a')
setTimeout(() => console.log('b'), 0)
console.log('c') */

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = "people/:id"
const opts = { crossDomain: true }

const onPeopleResponse = function(people) {
    console.log(`Hola, yo soy ${people.name}`)
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
// Clase29 - Manejando el orden y el asincronismo en javascript
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = "people/:id"
const opts = { crossDomain: true }

function obtenerPersonaje(id, callbacks) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, function(people) {
        console.log(`Hola, yo soy ${people.name}`)
        if (callbacks) {
            callbacks()
        }
    })
}

obtenerPersonaje(1, function() {
    obtenerPersonaje(2, function() {
        obtenerPersonaje(3, function() {
            obtenerPersonaje(4, function() {
                obtenerPersonaje(5)
            })
        })
    })
})
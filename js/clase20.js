// Clase19 - Transformar un array
var jeffer = {
    nombre: 'Jefferson',
    apellido: 'Lindao',
    altura: 1.65,
    cantidadDeLibros: 19
}

var andrea = {
    nombre: 'Andrea',
    apellido: 'Martinez',
    altura: 1.67,
    cantidadDeLibros: 105
}

var jose = {
    nombre: 'Jose',
    apellido: 'Gomez',
    altura: 1.80,
    cantidadDeLibros: 156
}

var felix = {
    nombre: 'Felix',
    apellido: 'Martinez',
    altura: 1.66,
    cantidadDeLibros: 185
}

var victor = {
    nombre: 'Victor',
    apellido: 'Rodriguez',
    altura: 1.85,
    cantidadDeLibros: 134
}
var persona = [jeffer, jose, felix, victor, andrea]

/* var acum = 0
for (let i = 0; i < persona.length; i++) {
    acum = acum + persona[i].cantidadDeLibros

} */
const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros


var totalDeLibros = persona.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)
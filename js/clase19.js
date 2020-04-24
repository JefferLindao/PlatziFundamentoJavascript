// Clase19 - Transformar un array
var jeffer = {
    nombre: 'Jefferson',
    apellido: 'Lindao',
    altura: 1.65
}

var andrea = {
    nombre: 'Andrea',
    apellido: 'Martinez',
    altura: 1.67
}

var jose = {
    nombre: 'Jose',
    apellido: 'Gomez',
    altura: 1.80
}

var felix = {
    nombre: 'Felix',
    apellido: 'Martinez',
    altura: 1.66
}

var victor = {
    nombre: 'Victor',
    apellido: 'Rodriguez',
    altura: 1.85
}

const esAlta = ({ altura }) => altura >= 1.8
    /* const pasarAlturaCms = (persona) => {
        // persona.altura *= 100
        return {
            ...persona,
            altura: persona.altura * 100
        }
    } */
const pasarAlturaCms = (persona) => ({
    ...persona,
    altura: persona.altura * 100
})

var persona = [jeffer, jose, felix, victor, andrea]
var personaALtas = persona.filter(esAlta)

var personasCms = persona.map(pasarAlturaCms)
console.log(personasCms)
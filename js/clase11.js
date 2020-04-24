//Clase11 - Funciones que retornan valores
var jeffer = {
    nombre:   'Jefferson',
    apellido: 'Lindao',
    edad:      27,
    desarrollador: true,
    cantante: false,
    cocinero: false,
    guitarrista: false,
    dj: false,
    frontend: true  
}

var juan = {
    nombre:   'Juan',
    apellido: 'Gomez',
    edad:      15,
    desarrollador: false,
    cantante: false,
    cocinero: false,
    guitarrista: true,
    dj: true,
    frontend: false  
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)

    if (persona.desarrollador) {
        console.log('Desarrollador')
    }

    if (persona.cantante) {
        console.log('Cantante')
    }

    if (persona.cocinero) {
        console.log('Cocinero')
    }
    if (persona.guitarrista) {
        console.log('Guitarrista')
    }
    if (persona.frontend) {
        console.log('Frontend')
    }
}

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es: mayor de edad`)
    }else{
        console.log(`${persona.nombre} es: menor de edad`)
    }
}

imprimirEsMayorDeEdad(juan)
// imprimirProfesiones(jeffer)
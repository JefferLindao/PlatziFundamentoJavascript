//Clase12 - Arrow functions
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
// Arrow functions
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD

function imprimirEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es: mayor de edad`)
    }else{
        console.log(`${persona.nombre} es: menor de edad`)
    }
}

function permitirAcceso(persona){
    if (!esMayorDeEdad(persona)) {
        console.log('ACCESO DENEGADO')
    }
}

/* imprimirEsMayorDeEdad(juan)
permitirAcceso(juan)
 */
//RETO
const esMenorDeEdad = persona => !esMayorDeEdad(persona)
function imprimirEsMenorDeEdad(persona) {
    if (esMenorDeEdad(persona)) {
        console.log(`${persona.nombre} es: menor de edad`)
    }else{
        console.log(`${persona.nombre} es: mayor de edad`)
    }
}

imprimirEsMenorDeEdad(juan)
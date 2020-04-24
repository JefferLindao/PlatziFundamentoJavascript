//Clase10 - Condicionales
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

imprimirProfesiones(jeffer)
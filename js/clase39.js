// Clase39 -Estructura de datos inmutables
const jeffer = {
        nombre: 'Jefferson',
        apellido: 'Lindao',
        edad: 27
    }
    // const cumpleaños = persona => persona.edad++
const cumpleañosInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
})
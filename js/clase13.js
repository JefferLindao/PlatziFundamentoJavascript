//Clase12 - Estructura repetitivas: for
var jeffer = {
    nombre: 'Jefferson',
    apellido: 'Lindao',
    edad: 27,
    peso: 100
}

console.log(`Al inicio del año ${jeffer.nombre} pesa ${jeffer.peso} kg`)

const INCREMENTO_PESO = 0.2

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
for (var i = 1; i <= 365; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarDePeso(jeffer)
    } else if (random < 0.5) {
        adelgazar(jeffer)
    }
}

console.log(`Al final del año ${jeffer.nombre} pesa ${jeffer.peso.toFixed(1)} kg`)
//Clase14 - Estructura repetitivas: while
var jeffer = {
    nombre: 'Jefferson',
    apellido: 'Lindao',
    edad: 27,
    peso: 100
}

console.log(`Al inicio del año ${jeffer.nombre} pesa ${jeffer.peso} kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANIO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const META = jeffer.peso - 3
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

var dias = 0

while (jeffer.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(jeffer)
    }
    if (realizaDeporte()) {
        adelgazar(jeffer)
    }
    dias++
}

console.log(`Pasaron ${dias} días hasta que ${jeffer.nombre} adelgazó 3kg`)
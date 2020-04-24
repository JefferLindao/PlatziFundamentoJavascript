// Clase40 - Cambiando de contexto al llamar a una funcion
const jeffer = {
    nombre: 'Jefferson',
    apellido: 'Lindao',
    edad: 27
}

const maria = {
    nombre: 'Maria',
    apellido: 'Gomez',
    edad: 30
}

function saludar(saludo) {
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

// const saludarJefferson = saludar.bind(jeffer)
// const saludarMaria = saludar.bind(maria)
// setTimeout(saludar.bind(jeffer, 'Hola pelotudo'), 1000)

// saludar.call(jeffer, 'Hola che')
saludar.apply(jeffer, ['Hola che'])
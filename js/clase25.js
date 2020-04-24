// Clase25 - Clase en Js ECMAScript 2015
class Persona {

    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar() {
        console.log(`Hola, me llamo nombre ${this.nombre} ${this.apellido}`)
    }

    soyAlto() {
        return this.altura > 1.8

    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super()
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`)
    }
}

var jeffer = new Desarrollador('Jefferson', 'Lindao', 1.80)
var fatima = new Persona('Fatima', 'Mendieta', 1.69)
var alex = new Persona('Alex', 'Reyes', 1.68)
var jose = new Persona('Jose', 'Flores', 1.85)

jeffer.saludar()
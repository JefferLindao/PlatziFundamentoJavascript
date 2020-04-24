// Clase22 - Modificando un prototipo
function HeredaDe(prototipoHijo, prototipoPadre) {
    var fn = function() {
        fn.prototype = prototipoPadre.prototype
        prototipoHijo.prototype = new fn
        prototipoHijo.prototype.constructor = prototipoHijo
    }
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.soyAlto = function() {
    this.altura > 1.8
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

HeredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`)
}

var jeffer = new Desarrollador('Jefferson', 'Lindao', 1.80)
var fatima = new Persona('Fatima', 'Mendieta', 1.69)
var alex = new Persona('Alex', 'Reyes', 1.68)
var jose = new Persona('Jose', 'Flores', 1.85)
var ana = new Persona('Anabel', 'Gonzales', 1.89)
// Clase21 - Comó funcionan la clases en Javascript
function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.soyAlto = function() {
    if (this.altura >= 1.80) {
        console.log(`${this.nombre} es alto mide: ${this.altura}`)
    } else {
        console.log(`${this.nombre} es bajo mide: ${this.altura}`)
    }
}

var jeffer = new Persona('Jefferson', 'Lindao', 1.80)
var fatima = new Persona('Fatima', 'Mendieta', 1.69)
var alex = new Persona('Alex', 'Reyes', 1.68)
var jose = new Persona('Jose', 'Flores', 1.85)
var ana = new Persona('Anabel', 'Gonzales', 1.89)

jeffer.soyAlto()
alex.soyAlto()
fatima.soyAlto()
jose.soyAlto()
ana.saludar()
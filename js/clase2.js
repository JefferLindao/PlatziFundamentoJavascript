var nombre = 'Sacha', apellido = 'Lifszyc'
//toUpperCase nos permite transformar una string en MAYUSCULA

var nombreEnMayuscula = nombre.toUpperCase()

// toLowerCase nos permite transformar un string en minuscula
var apellidoEnMinuscula = apellido.toLowerCase()

// charAt muestra el caracter de la posicion que le enviemos
var primeraLetraDelNombre = nombre.charAt(0)

// length nos permite saber la cantidad de letras que tiene alguan varible
var cantidadDeLetraDelNombre = nombre.length

/*var nombreCompleto = nombre + ' ' + apellido*/
//CONCADENACION
var nombreCompleto = `${nombre} ${apellido}`

//reto 
var nombre1='Jefferson'
var ultimaLetraDelNombre = nombre1.substr(-1)
console.log('la ultima letra del nombre es: '+ ultimaLetraDelNombre)

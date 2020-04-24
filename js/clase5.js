//Alcance de la varible

// varible global es la que esta definida fuera de la funcion
var nombre= 'Sacha'

function imprimirNombreEnMayuscula(nombre){
	nombre = nombre.toUpperCase()
	console.log(nombre)
}
imprimirNombreEnMayuscula(nombre)
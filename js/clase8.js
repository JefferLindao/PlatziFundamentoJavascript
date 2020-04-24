//Parámetros como referencia o como valor

var jeffer= {
	nombre:   "Jefferson",
	apellido: "Lindao",
	edad:      27
}

var juanito = {
	nombre:   "Juanito",
	apellido: "Dominguez",
	edad:      20
}

 function imprimirNombreEnMayuscula(persona){
	// var nombre = persona.nombre
	var {nombre} = persona
	console.log(nombre.toUpperCase())
}
imprimirNombreEnMayuscula(jeffer)
imprimirNombreEnMayuscula(juanito)
// imprimirNombreEnMayuscula({nombre: "Jose"}) 

function cumpleaño(persona) {
	return {
		...persona,
		edad: persona.edad+1
	}
}

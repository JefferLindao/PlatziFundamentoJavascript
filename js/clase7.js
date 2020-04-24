//Desestructurar objeto

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
imprimirNombreEnMayuscula({nombre: "Jose"}) 


// reto 
function imprimirNombreYEdad(persona) {
	var {nombre} = persona
	var {edad} = persona
	console.log("Hola, me llamo " + nombre.toUpperCase() + " y tengo " + edad + " años");
	
}
imprimirNombreYEdad(jeffer)
imprimirNombreYEdad(juanito)
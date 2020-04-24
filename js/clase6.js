//Objetos

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

function imprimirNombreEnMayuscula({nombre}){
	console.log(nombre.toUpperCase())
}
imprimirNombreEnMayuscula(jeffer)
imprimirNombreEnMayuscula(juanito)
imprimirNombreEnMayuscula({nombre: "Jose"})
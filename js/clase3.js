//incrementar de variable
var edad = 27
//edad = edad + 1
edad += 1


// desincrementar una variable
var peso = 75
//peso = peso - 2
peso -= 2

var sandwich = 1

peso = peso + sandwich

var jugarAlFutbol = 3
peso -= jugarAlFutbol 

//ejemplo de decimales
var precioDeVino = 200.3

//Math.round(variable) sirve para redondear una cantidad 
var total = Math.round(precioDeVino* 100 * 3)/100

//toFixed(n) sirve para que la varible me tome en cuenta la cantidad de decimal que le ingrese
var totalStr = total.toFixed(2)


//parseFloat(varible) me permite transformar un string a un numero flotante(decimal)
var total2 = parseFloat(totalStr)


var pizza = 8
var persona = 2
var cantidadPorcionesPersona = pizza / persona
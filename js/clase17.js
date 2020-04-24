// Clase17 - Introduccion a arrays 
var jeffer = {
    nombre: 'Jefferson',
    apellido: 'Lindao',
    altura: 1.65
}

var andrea = {
    nombre: 'Andrea',
    apellido: 'Martinez',
    altura: 1.67
}

var jose = {
    nombre: 'Jose',
    apellido: 'Gomez',
    altura: 1.80
}

var felix = {
    nombre: 'Felix',
    apellido: 'Martinez',
    altura: 1.66
}

var victor = {
    nombre: 'Victor',
    apellido: 'Rodriguez',
    altura: 1.85
}

var persona = [jeffer, jose, felix, victor, andrea]

for (let i = 0; i < persona.length; i++) {
    const element = persona[i];
    console.log(`${element.nombre} mide ${element.altura}`)
}
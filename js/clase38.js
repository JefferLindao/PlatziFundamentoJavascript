// Clase38 -Entendiendo los cloures de javascript
function crearSaludo(finalFrase) {
    return function(nombre) {
        console.log(`Hola ${nombre} ${finalFrase}`)
    }
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('güey')
const saludoColombiano = crearSaludo('Parse')

saludoArgentino('Jefferson')
saludoColombiano('Jefferson')
saludoMexicano('Jefferson')
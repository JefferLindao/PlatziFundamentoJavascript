// Clase35 - Hace cuantos días naciste
function diasEntreFecha(fecha, fecha1) {
    const unDias = 1000 * 60 * 60 * 24
    const diferencia = Math.abs(fecha - fecha1)
    return Math.floor(diferencia / unDias)
}
const hoy = new Date()
const nacimiento = new Date(1991, 8, 28)
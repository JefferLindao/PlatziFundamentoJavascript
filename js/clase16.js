// Clase16 - Condicionales Multiples
var signo = prompt('¿cual es tu signos?')
console.log(signo)

switch (signo) {
    case 'acuario':
        console.log(`Tiende a ser intuitivo por naturaleza, pero hoy podría recibir más impresiones psíquicas`)
        break
    case 'virgo':
        console.log(`El amor y el romance son hoy la máxima prioridad. Puede sentirse un poco inseguro sobre la estabilidad `)
        break
    case 'leo':
        console.log(`Si no está seguro de la posibilidad de aumentar su salari`)
        break
    case 'libra':
        console.log(`Si juega sus cartas correctamente, puede transformar lo que cría psíquicamente en un esfuerzo creativo.`)
        break
    case 'aries':
        console.log(`Has leído recientemente acerca de cómo una actitud mental positiva crea un cuerpo sano y una vida feliz`)
        break
    case 'tauro':
        console.log(`Hoy se puede completar la investigación que ha realizado para un proyecto en particular y estará listo para terminar`)
        break
    case 'gemenis':
    case 'gémenis':
        console.log(`Los sueños y visiones sobre su familia pintan una imagen rosa para el futuro. Estos sueños pueden ser proféticos`)
        break
    case 'escorpion':
        console.log(`Espere intercambiar muchas llamadas telefónicas y correos electrónicos con amigos hoy`)
        break
    case 'sagitario':
        console.log(`La suerte financiera continúa, aunque los viejos hábitos son difíciles de aceptar y puede tener dificultades`)
        break
    case 'capricornio':
        console.log(`¿Vas de viaje o te mudas? ¿La educación está involucrada de alguna manera?`)
        break
    case 'pisis':
        console.log(`La comunicación con amigos y socios debe ser clara, abierta, honesta y solidaria hoy.`)
        break
    default:
        console.log(`no es un signo zodiacal valido`)
}
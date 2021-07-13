
let dias
let resultado = diasDeAula('domingo')

function diasDeAula(dias) {
if (dias == 'segunda') {
    return 'Aula normal'
}if (dias == 'terça') {
    return 'Aula normal'
}if (dias == 'quarta') {
    return 'Aula Normal'
}if (dias == 'quinta') {
    return 'aula Normal'
}if (dias == 'sexta') {
    return 'Aula Normal'
}if (dias == 'sabado') {
    return 'Aproveite seu descanço'
}if (dias == 'domingo') {
    return 'Nos vemos na segunda'
}

}
 
console.log(resultado)
let peso 
let altura 


// var resultado = calcularIMC(50,1.57)
 
var imc = peso / (parseFloat(altura) * parseFloat(altura))

function calcularIMC(peso, altura) {

    var imc = peso / (parseFloat(altura) * parseFloat(altura))
    console.log(peso / (parseFloat(altura) * parseFloat(altura)));

    if (imc < 18.5) {
        return 'Magreza'
    }if ((imc >18.5) && (imc <= 24.9)) {
        return 'Normal'
    }if ((imc > 24.9)&&(imc <=30)) {
        return 'Sobrepeso'
    }if ((imc >30)) {
        return 'Obesidade'
    }
    return imc
}


// console.log(resultado)
console.log(calcularIMC(74,1.73))



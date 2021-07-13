//Criar um algotitmo que receba 3 notas de um aluno, calcule sua media e
// Mostre as seguintes mensagens de acordo com cada situação
// - Se a média for igual ou maior que 7 - Aprovado
// - Se a média for maior e igual a cinco e menor que 7 - Recuperação
// - Se a média for menor que 5 - Reprovado

function calculaMedia(nota1, nota2, nota3) {
    media = (nota1 + nota2 + nota3) / 3

    if (media >= 7 ) {
        return 'Aprovado'
    }if (media >=5 && media < 7) {
        return 'Recuperação'
    }if(media < 5){

       return 'Reprovado'
    }
}
console.log(calculaMedia(6,5,4))
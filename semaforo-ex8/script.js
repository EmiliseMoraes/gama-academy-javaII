let semaforo
let resultado = luzesSemaforo('verde')

function luzesSemaforo(semaforo) {

if (semaforo == 'vermelho') {
    return 'Pare';
}if (semaforo == 'amarelo') {
    return 'Espere';
} if (semaforo == 'verde') {
    return 'Pode Passar';
}
}
console.log(resultado)
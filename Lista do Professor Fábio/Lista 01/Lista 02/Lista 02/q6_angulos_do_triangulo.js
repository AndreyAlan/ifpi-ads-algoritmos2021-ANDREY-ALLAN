const prompt = require('prompt-sync')()

function ang_triangulo(ang1,ang2,ang3){

    // Processamnetos e saida de dados
    if ((ang1 < 90) && (ang2 < 90) && (ang3 < 90)){
        console.log('acutângulo!')
    }else if((ang1 == 90) || (ang2 == 90) || (ang == 90)){
        console.log('retângulo!')
    }else{
        console.log('obtusângulo!')
    }
    }
function main(){
    // Entrada
    const angulo1 = Number(prompt('Informe o ângulo 1: '))
    const angulo2 = Number(prompt('Informe o ângulo 2: '))
    const angulo3 = Number(prompt('Informe o ângulo 3: '))
    
    // Processamento e saída
    if (angulo1 + angulo2 + angulo3 == 180){
        console.log('Os angulos formam um triângulo')
        ang_triangulo(angulo1, angulo2, angulo3)
    }else{
        console.log('Os ângulos não formam um triângulo')
    }
}
main()
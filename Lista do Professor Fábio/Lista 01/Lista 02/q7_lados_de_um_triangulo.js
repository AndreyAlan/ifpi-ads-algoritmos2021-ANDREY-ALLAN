const prompt = require('prompt-sync')()

// Processamento e saída dos dados recebidos

function ang_triangulo(ang1,ang2,ang3){
    if ((ang1 == ang2) && (ang2 == ang3)){
        console.log('Formam um triângulo equilátero.')
    }else if((ang1 != ang2) && (ang2 != ang3) && (ang1 != ang3)){
        console.log('Formam um triângulo escaleno')
    }else{
        console.log('Forama um triângulo isósceles')
    }
    }
function main(){
    
    // Entrada

    const lado1 = Number(prompt('Informe o pimeiro lado: '))
    const lado2 = Number(prompt('Informe o segundo lado: '))
    const lado3 = Number(prompt('Informe o terceiro lado: '))
    
    // Processamento e saída dos dados recebidos

    if (lado1 + lado2 > lado3){
        console.log('Os lados formam um triângulo')
        ang_triangulo(lado1, lado2, lado3)
    }else{
        console.log('Os lados não formam um triângulo')
    }
}
main()
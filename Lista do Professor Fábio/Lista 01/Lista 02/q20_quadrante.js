const prompt = require('prompt-sync')()

function main(){
    
    // Entrada

    const angulo = Number(prompt('Informe o ângulo de 0 a 360 graus (em graus): '))
    
    //Processamento e saida dos dados recebidos

    if (angulo <= 90){
        console.log('Está no primeiro quadrante')
    }else if(angulo > 90 && angulo <= 180){
        console.log('Está no segundo quadrante')
    }else if(angulo > 180 && angulo <= 270){
        console.log('Está no terceiro quadrante')
    }else if(angulo > 270 && angulo <= 360){
        console.log('Está no quarto quadrante')
    }else{
        console.log('Opa doutor, o número informado por você é inválido')
    }
}
main()
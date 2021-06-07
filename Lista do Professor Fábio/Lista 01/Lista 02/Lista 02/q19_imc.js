const prompt = require('prompt-sync')()

function main(){
    
    // Entrada
    
    const altura = Number(prompt('Informe a sua altura (em metros): '))
    const peso = Number(prompt('Infrome o seu peso (em kg): '))
    
    imc = (peso/Math.pow(altura,2))
    
    //Processamento e saida dos dados recebidos

    if (imc < 25){
        console.log('Você está com peso nromal')
    }else if(imc >= 25 && imc <=30){
        console.log('Cuidado!! Você está obeso')
    }else{
        console.log('Cuidado!! Você está com obesidade mórbida')
    }
}
main()
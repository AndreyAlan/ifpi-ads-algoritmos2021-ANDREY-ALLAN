const prompt = require('prompt-sync')()

function main(){
   
    // Entrada

    const lado1 = Number(prompt('Informe o lado: '))
    const lado2 = Number(prompt('Informe o outro lado: '))
    const lado3 = Number(prompt('Agora mais outro lado: '))
    
    //Processamento e saida dos dados recebidos

    if (lado1 > lado2 && lado1 > lado3){
        console.log('O valor da hipotenusa é: ', lado1)
        console.log('O valor dos catetos é:', lado2, 'e',lado3)
    
    }else if (lado2 > lado1 && lado2 > lado3){
        console.log('O valor da hipotenusa é: ', lado2)
        console.log('O valor dos catetos é:', lado1, 'e',lado3)
    
    }else{
        console.log('O valor da hipotenusa é: ', lado3)
        console.log('O valor dos catetos é:', lado1, 'e',lado2)
    }
}
main()
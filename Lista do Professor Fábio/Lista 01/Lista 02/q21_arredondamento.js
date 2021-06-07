const prompt = require('prompt-sync')()

function main(){

    // Entrada

    const numero = Number(prompt('Informe um número: '))
   
    //Processamento e saida dos dados recebidos

    if(parte_fracionaria(numero) >= 0.5){
        const numero_arredondado = parseInt(numero) + 1
        console.log('O número foi arredondado para', numero_arredondado) 
    
        }else{
        var numero_arredondado = parseInt(numero)
        console.log('O número foi arredondado para', numero_arredondado)
        }
    }
    
    function parte_fracionaria(numero) {
        return numero % parseInt(numero)
    }
    main()
const prompt = require('prompt-sync')()

function main(){

    // Entrada

    const x = Number(prompt('Informe o ponto x: '))
    const y = Number(prompt('Informe o ponto y: '))
    
    //Processamento e saida dos dados recebidos

    if ( x <= 0 || y <= 0){
        console.log('Sinto muito mas os valores informados por você são inválidos para cálculo de área')
    }else{
        const area = x * y
        console.log('A area equivale a: ', area)
    }
}
main()
const prompt = require('prompt-sync')()

function main(){

    const numero = Number(prompt('Informe um número com o intervalo de 1 a 100: '))

    if (numero == 2 || numero == 3 || numero == 5 || numero == 7 || numero == 11 || numero == 13 || numero == 17 || numero == 19 || numero == 23 || numero == 29 || numero == 31 || numero == 37 || numero == 41 || numero == 43 || numero == 47 || numero == 53 || numero == 59 || numero == 61 || numero == 67 || numero == 71 || numero == 73 || numero == 79 || numero == 83 || numero == 89 || numero == 97){
        console.log('O número', numero, 'é primo')
    }else{
        console.log('O número', numero, 'não é primo')
    }
}
main()
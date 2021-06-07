const prompt = require('prompt-sync')();

function main (){
    // Entrada
    const numero1 = (prompt('Insira o número com dois algarismos: '))

    // Processamento
    if (numero1[0] == numero1[1]){
        console.log('Os algarismos são iguas')
    }else{
        console.log('Os algarsimos são diferentes')
    }
}
main()
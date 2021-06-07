const prompt = require('prompt-sync')();

// Entrada
function main (){
    const numero1 = Number(prompt('Insira o primeiro número: '))
    const numero2 = Number(prompt('Insira o segundo número: '))

    // Processamento
    if (numero1 > numero2){
        console.log('O maior numero é o: ', numero1)
        console.log('O menor número é o: ', numero2)

    }else if (numero1 < numero2){
        console.log('O menor número é o: ', numero2)
        console.log('O maior número é o: ', numero1)
    }else{
        console.log('Os números são iguais!')
    }
}
main()
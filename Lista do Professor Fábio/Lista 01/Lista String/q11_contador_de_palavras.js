const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    console.log('      CONTADOR DE PALAVRAS       ')
    
    let frase = prompt('Digite uma frase: '), quatidade = 0, palavra = frase.split(' ').length;
	
    console.log('A', frase, 'contem: ')
    console.log(palavra, 'palavras.');

}
main()
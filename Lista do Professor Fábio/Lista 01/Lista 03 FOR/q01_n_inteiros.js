const prompt = require('prompt-sync') ()

function main() {


    console.log('           NÚMEROS INTEIROS           ')
    
    var numero = Number(prompt('Informe um valor para N: '))
    let i = 1
    
    console.log('Os números inteiros de 1 até', numero, 'são: ')
    
    for(i ; i <= numero ; i++ ) {
    
    console.log(i)}

}
main()
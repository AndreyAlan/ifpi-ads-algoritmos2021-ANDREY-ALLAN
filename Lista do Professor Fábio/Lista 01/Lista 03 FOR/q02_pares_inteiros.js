const prompt = require('prompt-sync')()

function main() {

    console.log('          NÚMEROS INTEIROS PARES          ')
    
    var numero = Number(prompt('Informe um valor para N: '))
    let i = 1
    
    console.log('Os números inteiros de 1 até', numero, 'são: ')
   
    for(i; i <= numero ; i++ ) {
        
        if(i % 2 != 0 ) {
            continue
        }
       
        console.log(i)
    }
    
}
main()
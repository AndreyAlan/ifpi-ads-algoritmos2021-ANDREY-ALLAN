const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let palavra = prompt('Digite uma palavra: '), palavra2 = '', i

    for (i = palavra.length - 1; i >= 0; i--){
      
        palavra2 += palavra[i]
      
    }
    console.log('O inverso de/da ',palavra,':', palavra2)
    
    if (palavra2 == palavra){
        console.log(palavra,'é políndroma')
    
    }else{
        console.log(palavra,'não é políndroma')
    }
    
}
main()
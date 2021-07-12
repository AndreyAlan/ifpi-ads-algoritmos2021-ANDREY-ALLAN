const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let binario = prompt('Informe o número binaria: '), decimal = parseInt(binario, 2);
    
    console.log('O número', binario, 'em decimal é: ')
    console.log(decimal);

} 

main()
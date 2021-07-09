const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let i = 1
    let numero = 1
    const final = Number(prompt('Informe o numero final: '))
    
    
    for (i = 2; i < final + 2; i++) {
        
        console.log('Os números são: ', numero);
       
        numero =  numero + i;
    }
}
main()
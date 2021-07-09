const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let num = 0, prox = 0, prox2 = 1
    let numero = Number(prompt('Informe um número: '))

    if(numero >= 2){
        
        console.log(prox)
        console.log(prox2)

    for (let i = 2; i <= numero; i++) {
        
        num = prox + prox2
        console.log(num);
        
        prox = prox2;
        prox2 = num;

    }

    } else{
        console.log('O número informado não é valido')
    }
}
main()
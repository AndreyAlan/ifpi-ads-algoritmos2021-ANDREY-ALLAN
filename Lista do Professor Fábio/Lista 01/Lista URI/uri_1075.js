  
const prompt = require('prompt-sync')()

function main() {

    const valor = Number(prompt('Informe o valor de N: '))

    
    let total = 0, i = 1
    
    for(i; i <= 1000; i++){

        if(i % valor === 2){
            
            total = i
            
            console.log(total)
        }
    }  
}


main()
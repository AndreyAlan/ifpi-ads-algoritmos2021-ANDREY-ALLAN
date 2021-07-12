const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let  numero = 5, matriz = new Array(numero), numero2 = 1, i = 0 
    
    
    for(i; i < numero; i++) {
        
        matriz[i] = new Array(numero)
    }
    
    for(let i = 0; i < numero; i++) {
       
        for (let j = 0; j < numero; j++) {
            
            matriz[i][j] = numero2
            
            numero2 ++
        }
    }

    console.log('A: ', matriz)
}

main()
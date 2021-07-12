// Acho que o meu não está funcionado corretamente

const prompt = require('prompt-sync')({
    sigint: true
})

function main() {   
    sqc()
}

function sqc() {
    
    let valor = 1, i = 60
    
    for(i; i >= 0; i -= 5){

        valor += 3
        
        console.log('A: ', valor)
        console.log('B :' , i)
    }
}

main()
const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    let numero = Number(prompt('Informe a ordem da matriz: ')), i = 0, matriz = new Array(numero)
    
    for(i; i < numero; i++) {
        
        matriz[i] = new Array(numero)
    }
    
    for(let i = 0; i < numero; i++) {
        
        for (let j = 0; j < numero; j++) {
           
            if(i == j){
                matriz[i] [j] = 1
            
            } else{
                matriz[i][j] = 0
            }
        }
    }

    

    console.log('Matriz identidade: ', matriz)
}

main()
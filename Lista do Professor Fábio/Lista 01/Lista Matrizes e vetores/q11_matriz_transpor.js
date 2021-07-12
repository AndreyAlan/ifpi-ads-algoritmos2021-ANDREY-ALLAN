const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
  
    let numero = Number(prompt('Informe a ordem da matriz: ')), transposta = 0, 
    matriz = new Array(numero), matriz2
    
    for(let i = 0; i < numero; i++){
        matriz[i] = new Array(numero)
    }
    
    matriz2 = new Array(numero)
   
    for(let i = 0; i < numero; i++){
        matriz2[i] = new Array(numero)
    }
    
    
    for(let i = 0; i < numero; i++){
        
        for (let i2 = 0; i2 < numero; i2++) {
            matriz[i][i2] = i2 + 1
        }
    }
    
    for(let i = 0; i < numero; i++){
        
        for (let i2 = 0; i2 < numero; i2++) {
            matriz2[i] [i2] = matriz [transposta] [transposta]
        }
        transposta ++
    }

    console.log('A: ', matriz)
    console.log('B: ', matriz2)
}

main()
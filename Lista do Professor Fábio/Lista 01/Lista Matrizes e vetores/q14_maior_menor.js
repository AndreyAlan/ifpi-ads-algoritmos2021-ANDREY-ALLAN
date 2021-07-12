const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    
    let numero = Number(prompt('Informe a ordem da matriz: ')), matriz = new Array(numero), maximo, minimo
    
    for(let i = 0; i < numero; i++) {
        matriz[i] = new Array(numero)
    }
    
    for(let i = 0; i < numero; i++) {
        
        for (let j = 0; j < numero; j++) {
            
            matriz[i][j] = Number(prompt('Informe um número: '))
        }
    }
    
    maximo = matriz[0][0] 
    minimo = matriz[0][0]
    

    for(let i = 0; i < numero; i++){
        
        for (let i2 = 0; i2 < numero; i2++) {

            
            maximo = Math.max(maximo, matriz[i][i2])
            
            posicao = i + i2
            
            minimo = Math.min(minimo, matriz[i][i2])
            
            posicao2 = i + i2
        }
    }

    console.log(matriz)
    console.log('O valor maximo é de: ' , maximo, ', na posição: ', posicao)
    console.log('O valor minimo é de: ' , minimo, ', na posição: ', posicao2)

}

main()
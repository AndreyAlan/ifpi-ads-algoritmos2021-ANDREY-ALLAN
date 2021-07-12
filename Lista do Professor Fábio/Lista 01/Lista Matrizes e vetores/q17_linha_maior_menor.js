/* Acho que não ta funcionado corretamente */

const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let numero = Number(prompt('Informe a ordem da matriz: ')), matriz = new Array(numero), linha = 0
    
    for(let i = 0; i < numero; i++){
        
        matriz[i] = new Array(numero)
    }
    
    for(let i = 0; i < numero; i++) {
        
        for (let j = 0; j < numero; j++) {
            
            matriz[i][j] = Number(prompt(`Informe um número ${i}, ${j}: `))
        }
    }
    let soma = 0, linha2 = matriz[0][0]
    
    for(let i = 0; i < numero; i++) {
        
        for (let i2 = 0; i2 < numero; i2++) {
            
            soma = soma + matriz[i][i2] 
            
            if(soma > linha){
                linha = i
            }
            if(soma < linha2){
                linha2 = i
            }
        }
    }

    console.log(matriz)

    console.log('A maior linha é a: ', linha)
    console.log('A menor linha é a: ', linha2)
}

main()
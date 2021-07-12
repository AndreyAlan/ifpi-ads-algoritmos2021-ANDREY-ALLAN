const prompt = require('prompt-sync')({
    sigint: true
})

function main() {


    let numero = Number(prompt('Informe a ordem da matriz: ')), soma_principal = 0,
    soma_lateral = 0, resto = 0, matriz
    
    matriz = new Array(numero)
    
    for(let i = 0; i < numero; i++) {
        
        matriz[i] = new Array(numero)
    }
    
    for(let i = 0; i < numero; i++) {
        
        for (let j = 0; j < numero; j++) {
            
            matriz[i][j] = j + 1
        }
    }

     //console.log('Diagonal principal')

    for(let i = 0; i < numero; i++){
        
        for (let j2 = 0; j2 < numero; j2++) {
            
            if(i == j2){
               
                soma_principal = soma_principal + matriz[i][j2]
            }
        }
    }

     //console.log('Diagonal lateral')

    for(leti = 0; i < numero - 1; i++){
        
        for (let i2 = 0; i2 < numero - 1; i2++) {
            
            if(i == i2){
                soma_lateral = soma_lateral + matriz[i] [i2 + 1]
                
                soma_lateral = soma_lateral + matriz[i + 1] [i2]
            }
        }
    }
// Não cosegui fazer essa parte 
// Tudo que eu tava fazendo tava dando erro kkk
}

main()
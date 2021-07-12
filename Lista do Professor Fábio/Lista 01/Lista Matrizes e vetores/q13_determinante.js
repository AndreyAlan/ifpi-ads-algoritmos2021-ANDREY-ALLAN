const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    let numero = 2, matriz = new Array(numero), resultado

   
    for(let i = 0; i < numero; i++) {
        matriz[i] = new Array(numero)
    }
    
   
    for(let i = 0; i < numero; i++) {
        
        for (let j = 0; j < numero; j++) {
           
            matriz[i][j] = Number(prompt('Informe os elementos: '))
        }
    }

    resultado = matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0] 
    
    console.log('______________________')
    console.log('É igual á: ', resultado)

}
main()
/* Incompleta*/

const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    let numero = Number(prompt('Informe a ordem da matriz: ')),
    soma = 0, soma2 = 0, matriz = new Array(numero)
    
    for(let i = 0; i < numero; i++) {
       
        matriz[i] = new Array(numero)
    }
    
    for(let i = 0; i < numero; i++) {
        
        for (let j = 0; j < numero; j++) {
            
            matriz[i][j] = Number(prompt('Insira um número: '))

/* Não consegui desenvolver depois daqui */

        }
    }
}
main()
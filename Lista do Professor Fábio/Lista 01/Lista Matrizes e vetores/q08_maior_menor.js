const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let numero = Number(prompt('Informe quantos números deseja conferir: ')), 
    vetor = new Array(numero), minimo

    for(let i = 0; i < numero; i++){
        vetor[i] = Number(prompt('Digite o número: '))
    }
    
    minimo = vetor[0]

    for(let i2 = 0; i2 < numero; i2++) {
       minimo   = Math.min(minimo, vetor[i2]);
    }

    let maximo = vetor[0]
    
    for(let i = 0; i < numero; i++) {
       maximo = Math.max(maximo, vetor[i]);
    }

    console.log('Aguarde enquanto o código está sendo processado...')
    console.log('__________________________________________________')
    console.log('Menor elemento é o:', minimo)
    console.log('Maior elemento é o:', maximo)
    console.log('Código executaod com sucesso!!!')

}
main()
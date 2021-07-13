const { maiorV } = require('./teste')

const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
   
    const numero = Number(prompt('Informe a quantidade de elementos: '))
    const vetor = new Array(numero)

    
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = Number(prompt('informe um valor válido: '))
        
    }
    let media = valores(vetor), menor = menorV(vetor), maior = maiorV(vetor), 
    positivos = qtd_positivos(vetor), negativo = qtd_negativos(vetor), 
    repetidos = repetido(vetor)
    
    console.log('Média: ', media)
    console.log('Maior: ', maior)
    console.log('Menor: ', menor)
    console.log('Positivos: ', positivos)
    console.log('Negativos: ', negativo)
    console.log('Repetidos: ', repetidos)
    
    }
    function valores(vetor) {
        let soma = 0
        for (let i = 0; i < vetor.length; i++) {
            
            soma = soma + vetor[i]
        }
        media = soma/vetor.length
        return media.toFixed(2)
        
    }
    
    function menorV(vetor){
        let menor = vetor[0]
        
        for(let i = 0; i < vetor.length; i++) {
           menor = Math.min(menor, vetor[i]);
        }
        return menor
        
    }
    
    function maiorV(vetor){
        let max = vetor[0]
        
        for(let i = 0; i < vetor.length; i++) {
           max = Math.max(max, vetor[i]);
        }
        
        return max
        
    }
    
    function qtd_positivos(vetor){
        let positivo = 0
        for(let i = 0; i < vetor.length; i++) {
           
            if (vetor[i] > 0) {
               positivo = positivo + 1
           }
        }
        return positivo
    }
    
    function qtd_negativos(vetor) {
        let negativo = 0
       
        for(i = 0; i < vetor.length; i++) {
           
            if (vetor[i] < 0) {
               negativo = negativo + 1
           }
        }
        return negativo
        
    }
    
    function repetido(vetor){
        let sintuacao = 'não'
        
        for(let i = 0; i < vetor.length; i++) {
           
            for (let j = 0; j < vetor.length; j++) {
               
                if((i != j) && (vetor[i] == vetor[j]) ){
                   sintuacao = 'sim'
               }
               
           }
        }
        return sintuacao
    }
    main()
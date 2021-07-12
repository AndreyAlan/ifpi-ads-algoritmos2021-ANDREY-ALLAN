const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    const tamanho = Number(prompt('Informe o tamanho do vetor: '))
    let vetor = Array(tamanho), vetor2 = Array(tamanho), vetor3, i = 0 

   for(i; i < tamanho; i++){
        
    vetor[i] = Number(prompt('Informe o elemento do vetor A:'))
    }
   
    for(let i = 0; i < tamanho; i++){
        vetor2[i] = Number(prompt('Informe o elemento do vetor B: '))
    }
    vetor3 = [   vetor,   vetor2]
    
    console.log('A',vetor)
    console.log('B',vetor2)
    console.log('C',vetor3)
    
}
main()
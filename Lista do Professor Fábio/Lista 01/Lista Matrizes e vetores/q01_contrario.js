const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    const tamanho = Number(prompt('Informe o tamanho do vetor: '))
    let vetor = Array(tamanho), vetor2 = Array(tamanho)

   for(let i = 0; i < tamanho; i++){
       
        vetor[i] = Number(prompt('Informe o elemento do vetor: '))
       
    }
    
    let i2 = 0
    
    for(let i = vetor2.length - 1; i >= 0; i--) {
        vetor2[i] = vetor[i2]
        i2++
    }
   
    console.log(vetor)
    console.log(vetor2)
    
    

}

main()
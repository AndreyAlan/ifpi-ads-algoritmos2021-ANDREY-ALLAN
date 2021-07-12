const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    const tamanho = Number(prompt('Informe o tamanho do vetor: '))
    let vetor = Array(tamanho), vetor2 = Array(tamanho), i = 0
    

   for(i; i < tamanho; i++){
        vetor[i] = Number(prompt('Informe o elemento do vetor A: '))
    }
   
    for(let i = 0; i < tamanho; i++){
        vetor2[i] = Number(prompt('Informe o elemento do vetor B: '))
    }

    let intersercao = [], uniao = [], uniao2 = [], uniao3 = []
    
    for(let i = 0; i < vetor.length; i++){
       
        for(let i2 = 0; i2 < vetor2.length ; i2++){
            
            if(vetor[i] === vetor2[i2]){
                intersercao[i] = vetor[i]               
             }
        }
    }
    for(let i = 0; i < vetor.length; i++){
        
        for(let i3 = 0; i3 < vetor2.length ; i3++){
            
            if(vetor[i] !== vetor2[i3]){
                uniao[i] = vetor[i]             
                uniao2[i3] = vetor2[i3]              
                uniao3 = [   uniao,    uniao2]             
             }
        }
    } 
    console.log('A',vetor)
    console.log('B',vetor2)
    console.log('C',uniao3)
    console.log('D',intersercao)  
  
}

    
main()
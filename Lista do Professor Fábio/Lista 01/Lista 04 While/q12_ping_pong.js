const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let ponto = 0
    let ponto1 = 0 
    let ponto2 = 0

    while(true){
        ponto = Number(prompt('Qual dos jogadores que marcou o ponto? '))
       
        if(ponto == 1){
            ponto1++
        
        }if(ponto == 2){
            ponto2++
        }
        
        if(ponto1 >= 21){
            
            if(ponto1 - ponto2 >= 2){
                console.log('O jogador vencedor foi o jogador 1')
                break
            }
        }
        if(ponto2 >= 21){
            
            if(ponto2 - ponto1 >= 2){
                console.log('O jogador vencedor foi o jogador 2')
                break
            }
        }
    }
}
main()
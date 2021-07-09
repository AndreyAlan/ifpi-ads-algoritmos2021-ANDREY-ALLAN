/*Não sei se fiz certo, mas acho que não deve ta certo*/

const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let razao, variavel, limites
    let i
    
    
    variavel = Number(prompt('Informe uma variavel: '))
    
    limites = Number(prompt('Informe o limite: '))
    
    razao = Number(prompt('Informe a razão: '))
    
    var progrecao = pa(variavel, razao, limites)
    
    for(i = variavel; i < progrecao; i++) {
       
        console.log('São: ', i)
    }
}



function pa(i,razao2,funcao) {

funcao = i + (funcao - 1) * razao2

return funcao

}
main()
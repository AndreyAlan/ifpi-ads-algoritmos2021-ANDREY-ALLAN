const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    var rand = Math.floor((Math.random() * (10 - 1) + 1))
    
    let numero
    let i = 0

    while (rand) {
        numero = Number(prompt('Chute um númer de 1 a 10 para tentar acertar: '))
        
        if (numero < rand) {
            console.log('é maior')
        
        } else if (numero > rand) {
            console.log('é menor')
        
        } else {
            console.log('Que é isso dotor, acertouuuu mizeravi!!!')
            console.log('Com apenas : ', i + 1, 'tentativas')
            break
        
        }
        i++
    }
}

main()
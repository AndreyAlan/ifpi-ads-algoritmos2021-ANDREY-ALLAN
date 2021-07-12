//Não consegui fazer funcionar

const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    let numero = Number(prompt('Informe quantos números deseja conferir:  ')), vetor = new Array(numero), vetor2 = new Array(numero),
    minimo
    

    for(let i = 0; i < numero; i++){
        vetor[i] = Number(prompt('Digite o número: '))
    }

    minimo = vetor[0]

    for (let i = 0; i < numero; i++) {
        
        for(let i2 = 0; i2 < numero; i2++){
            minimo = minimo, vetor[i2]
        }
        
        vetor2[i] = minimo
    }
    console.log('A: ', vetor)
    console.log('B: ', vetor2)
}
main()
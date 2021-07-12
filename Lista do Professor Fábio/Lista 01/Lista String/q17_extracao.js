const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
   
    let frase = prompt('Insira um texto:'), texto = '', posicao = prompt('Informe a posição que deseja começar a apagar: '), 
    apaga = Number(prompt('Informe a quantidade que deseja apagar: ')), i = 0

    for (i; i < frase.length; i++) {

        if (i == posicao - 1) {
            i += apaga - 1 
        
        } else {

            texto += frase[i]
        }
    }
    console.log(texto)
} 
main()
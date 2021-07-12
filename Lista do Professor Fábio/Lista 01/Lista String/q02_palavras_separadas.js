const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    let frase = prompt('Informe a frase para o código ser executado (com mais de uma palavra) : '), frase2 = '', i = 0
    

    for (i ; i < frase.length; i++) {
        
        if (frase[i] != ' ') {
            frase2 += frase[i]
        
        } else {
            frase2 += '\n'
        }
    }

    console.log(frase2)
    console.log('Frase separda com sucesso!!!')
}
main()
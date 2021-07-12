const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    console.log('2x      DUPLICADOR DE LETRAS      2x')
    
    let frase = prompt('Informe a frase para que o código seja executado: '), frase2 = '', i = 0

    for (i ; i < frase.length; i++) {
        
            frase2 += frase[i] + frase[i]
        
    }
    
    console.log(frase2)
    console.log('Código executado com sucesso!!!')
}
main()
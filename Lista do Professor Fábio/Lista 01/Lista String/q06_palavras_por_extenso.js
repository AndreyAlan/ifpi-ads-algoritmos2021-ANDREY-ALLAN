const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let frase = prompt('Escreva uma frase (contendo pelo menos um algoritimo): '), resultado = ' ', i = 0

    for (i ; i < frase.length; i++) {

        
        if (frase[i] == '0') {
            resultado += ' zero '
        
        } else if (frase[i] == '1') {
            resultado += ' um '
        
        } else if (frase[i] == '2') {
            resultado += ' dois '
        
        } else if (frase[i] == '3') {
            resultado += ' tres '
        
        } else if (frase[i] == '4') {
            resultado += ' quatro '
        
        } else if (frase[i] == '5') {
            resultado += ' cinco '
       
        } else if (frase[i] == '6') {
            resultado += ' seis '
        
        } else if (frase[i] == '7') {
            resultado += ' sete '
        
        } else if (frase[i] == '8') {
            resultado += ' oito '
       
        } else if (frase[i] == '9') {
            resultado += ' nove '
        
        } else {
            resultado += frase[i]
        }
    }
    console.log( resultado )
    console.log('Código executado com sucesso!!!')
}
main()
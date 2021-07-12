const prompt = require('prompt-sync')()

function main() {
    
    let frase = prompt('Informe a frase que deseja codificar: '), frase2 = '', i

    for (i = frase.length - 1; i >= 0; i--) {
        
        if (frase[i] == 'a' || frase[i] == 'e' || frase[i] == 'i' || frase[i] == 'o' || frase[i] == 'u' || frase[i] == 'A' || frase[i] == 'E' || frase[i] == 'I' || frase[i] == 'O' || frase[i] == 'U') {
            frase2 += frase[i]
        
        } else {
            frase2 += '#'
        }
    }
    console.log('Frase codificada com sucesso!!!')
    console.log(frase2)
}
main()
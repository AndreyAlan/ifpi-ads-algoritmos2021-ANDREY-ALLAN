const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    console.log('       Ecripitografador de palavras       ')


    let frase = prompt('Insira a frase: '), cripitografia = '', vogais = '', descripitografado = '',
    i = 0
    
    for (i; i < frase.length; i++) { 
       
        if (frase[i] == 'a' || frase[i] == 'e' || frase[i] == 'i' || frase[i] == 'o' || frase[i] == 'u' || frase[i] == 'A' || frase[i] == 'E' || frase[i] == 'I' || frase[i] == 'O' || frase[i] == 'U') {
            cripitografia += '#'
            vogais += frase[i] + i
        
       
        } else {
            cripitografia += frase[i]
        }
    }
    
    for (i = 0; i < cripitografia.length; i++) {

        let i2 = 0
        
        if (cripitografia[i] != '#') {
            descripitografado += cripitografia[i]
       
        } else {
           
            for (i2 ; i2 < vogais.length; i2++) {
            
                if (vogais[i2] == i) {
                    descripitografado += vogais[i2 - 1]
                }
            }
        }
    }

    console.log('O progama está sendo processado, aguarde um momento.')
    console.log('____________________________________________________')
    console.log('A frase encriptografada é: ', cripitografia)
    console.log('A posicao das vogais são: ', vogais)
    console.log('A frase descriptografada é: ', descripitografado)
    
    console.log('____________________________________________________')
    console.log('Progama executado com sucesso!!!')

}
main()
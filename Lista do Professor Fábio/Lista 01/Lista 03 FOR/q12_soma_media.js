const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    let lista, numero, media, i
    
    let soma = 0 
    
    numero = Number(prompt('Informe a quantidade de termos: '))

    for (i = 0; i < numero; i++) {
        
        console.log(i+1,': ')
        
        lista = Number(prompt(''))
        
        soma += lista
       
    }
    media = soma / numero

console.log('A soma dos termos da lista é: ', soma)

console.log('e a media entre os termos da lista é: ', media)

}

main()
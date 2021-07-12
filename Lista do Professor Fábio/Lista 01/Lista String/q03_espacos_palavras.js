const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    const frase = prompt('Informe a frase para o código ser executado: ')
    let junto, separado
    
    separado = frase.split(' ')
    
    junto = separado.join('')

    console.log(junto)
    console.log('Código executado com sucesso!!!')
}
main()

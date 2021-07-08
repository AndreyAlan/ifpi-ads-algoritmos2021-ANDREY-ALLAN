const prompt = require('prompt-sync')()

function main() {

    let numero = Number(prompt('Informe um número: '))

    let comparacao = 0

    while (numero != comparacao) {

    comparacao = Number(prompt('Informe outro número: '))
   
    }
    
    console.log(comparacao, 'é igual a ', numero)

}
main()
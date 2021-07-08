const prompt = require('prompt-sync')()

function main () {

    let i = 1

    while (numero != 0) {

        var numero = Number(prompt('Informe o número que deseja conferir: '))

        i = 1

        while (i <= numero) {

            if (numero % i == 0)

            console.log(`${numero} é divisível por ${i}`)
            
                i++
        }
    }
}
main()

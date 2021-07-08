/* Não consegui pegar direito  raciocino dessa questão
Por isso não ficou como o senhor esperava
*/
const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    let prova, quantidade, nome, clasificacao, clube, tempo, pontos
    let i = 0, pontos1 = 0, pontos2 = 0 

    while (prova != 0 || quantidade != 0) {
        prova = Number(prompt('Informe o número da prova: '))
        quantidade = Number(prompt('Informe a quantidade de competidores: '))

        if (prova != 0 || quantidade != 0) {

            while (i < quantidade) {
                nome = prompt('Informe o nome do nadador: ')
                clasificacao = Number(prompt('Informe a classificação do nadador: '))
                tempo = Number(prompt('Informe o tempo que o nadador fez (segundos): '))
                clube = prompt('Informe o clube do nadador: ')

                
                if (clasificacao == 1) {
                    pontos = 9
                }
                else if (clasificacao == 2) {
                    pontos = 6
                }
                else if (clasificacao == 3) {
                    pontos = 4
                }
                else if (clasificacao == 4) {
                    pontos = 3
                }
                else {
                    pontos = 0
                    console.log('Infelizmente o nadador não pontuou')
                }

                if (clube == 'IFPI Central') {
                    pontos1 += pontos
                }
                else if (clube == 'IFPI Sul') {
                    pontos2 += pontos
                    
            }
            console.log(nome, 'ficou em', clasificacao, 'lugar e marcou', pontos, 'pontos para clube', clube)
                i++
        }
        console.log('O clube do IFPI Central pontuou: ', pontos1, 'e o clube do IFPI Sul pontuou: ', pontos2)

    }
}

}
main()
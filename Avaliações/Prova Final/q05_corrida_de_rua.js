const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    let tempo_alvo = Number(prompt('Informe o tempo alvo da corrida (segundos): '))

    let competidores, clasificacao, timeA, timeB, tempo, pontos,
    pontos1 = 0, pontos2 = 0, i = 0

    while (tempo_alvo != 0 || competidores != 0) {
        
        competidores = Number(prompt('Informe a quantidade de competidores: '))

        if (competidores != 0) {

            while (i < competidores) {
                
            timeA = Number(prompt('Informe o tempo do competidor do time A: '))
            timeb = Number(prompt('Informe o tempo do competidor do time B: '))

            
                
                if ( timeA < timeB) {
                    pontos = 10
                }
                else if (timeA <= timeB) {
                    pontos = 7
                }
                else if (timeA <= timeB) {
                    pontos = 3
                }
                else if (timeA <= timeB) {
                    pontos = 1
                }
                else {
                    console.log('Os outros jogadores não pontuaram')
                }

                    timeA = pontos1 += pontos
               
                    timeB = pontos2 += pontos
                    
            }
            
        }
        console.log('O time do A pontuou: ', pontos1, 'e o tiem B pontuou: ', pontos2)

    }

}
main()
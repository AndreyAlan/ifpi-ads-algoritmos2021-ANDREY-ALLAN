const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    let voto, eleitores
    let bolsobaro = 0, lula = 0, ciro = 0, nulo = 0, branco = 0
    
    eleitores = Number(prompt('Informe o número de eleitores: '))
    
    for (let i = 0; i < eleitores; i++) {
        
        console.log('        ELEIÇÕES 2022'        )
        console.log('Insira os digitos:         #VOTECERTO')
        voto = Number(prompt('VOTO: '))
        console.log('Seu voto foi computado com sucesso!!!')
        console.log('A Justiça Eleitoral agradece pelo seu voto.')

       
        if (voto == 17) {
            bolsobaro++
       
        } else if (voto == 13) {
            lula++
        
        } else if (voto == 23) {
            ciro++
        
        } else if (voto == 1) {
            nulo++
       
        } else if (voto == 0) {
            branco++
        }
    }
    const bolsonaro2 = (bolsobaro * 100) / eleitores
    const lula2 = (lula * 100) / eleitores
    const ciro2 = (ciro * 100) / eleitores
    const nulo2 = (nulo * 100) / eleitores
    const branco2 = (branco * 100) / eleitores

    console.log('\nBolsobaro: ', bolsobaro,', com', bolsonaro2 ,'% dos votos')
    console.log('\NLula: ', lula,', com', lula2 ,'% dos votos')
    console.log('\nCiro: ', ciro,', com', ciro2 ,'% dos votos')
    console.log('\nNulo: ', nulo,', com', nulo2 ,'% dos votos')
    console.log('\nCiro: ', branco,', com', branco2 ,'% dos votos')

    if (bolsonaro2 > lula2 && bolsonaro2  > ciro2) {
        console.log('Bolsonaro foi o vencedor!')
    
    } else if (lula2 > bolsonaro2 && lula2 > ciro2) {
        console.log('O candidato vencedor foi: Lula!')
    
    } else {
        console.log('O candidato vencedor foi: Ciro Gomes!')
    }
}
main()
const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let matricula
    let nota1, nota2, nota3
    let media, aprovados = 0, reprovados = 0, total_alunos = 0
    
    while (matricula !== 0) {
        matricula = Number(prompt('Informe a matricula do aluno: '))
        
        if (matricula !== 0) {
            nota1 = Number(prompt('Informe a primeira nota: '))
            nota2 = Number(prompt('Informe a segunda nota: '))
            nota3 = Number(prompt('Informe a terceira nota: '))

            media = (nota1 * 2) + (nota2 * 3) + (nota3 * 5) / 10

            if (media >= 7) {
                console.log('Parabens!!! você esta aprovado')
                aprovados++
            
            } else if (media < 7) {
                console.log('Infelizmente você ficou reprovado')
                reprovados++
            }
            total_alunos++
        }
    }
    console.log('O total de alunos e de:', total_alunos, '\ne,' , aprovados , ' desses alunos foram aprovados, e,', reprovados, 'foram reprovados')
}
main()
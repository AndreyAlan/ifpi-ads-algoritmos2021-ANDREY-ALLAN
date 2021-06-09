const prompt = require('prompt-sync')()

function main(){

    // Entrada

    const nome_aluno = prompt('Informe o nome do aluno: ')
    const nota1 = Number(prompt('Informe a nota da primeira avaliação: '))
    const nota2 = Number(prompt('Informe a nota da segunda avaliação: '))
    const nota_atividade = Number(prompt('Informe a nota das atividades: '))

    let aprov_reprov

    let media_prova_final

    // Processamneto dos dasdos recebidos

    const media_ponderada = ((nota1 * 0.2) + (nota2 * 0.3) + (nota_atividade * 0.1)) / 0.6

    if (media_ponderada >= 7){
        aprov_reprov = 'PARABÉNS!!! Você foi aprovado'
    
    } else if (media_ponderada < 4){
        aprov_reprov = ('Infelizmente você foi reprovado :( ')

    }else{
        console.log('IIHH, você não conseguiu o rsultado esperado, tera que fazer a PROVA FINAL!')
        const nota_prova_final = Number(prompt('Informe a nota da sua prova final: '))
        media_prova_final = (media_ponderada + nota_prova_final) / 2
        if (media_prova_final >= 6){
            aprov_reprov = 'UFAAA, você foi aprovado com a sua nota da prova final!'

        }else{
            aprov_reprov = 'É uma pena :( , mas você imfelizmente não conseguiu a nota esperada'
        }
    }

    // Saida
    console.log('          BOLETIN ESCOLAR          ')
    console.log('----------', nome_aluno,'----------')
    console.log('Nota 1', nota1)
    console.log('Nota 2', nota2)
    console.log('Nota das atividades', nota_atividade)
    console.log('A sintuação do aluno é:', aprov_reprov)
    console.log('Media do aluno é: ', media_ponderada.toFixed(2))
}
main()
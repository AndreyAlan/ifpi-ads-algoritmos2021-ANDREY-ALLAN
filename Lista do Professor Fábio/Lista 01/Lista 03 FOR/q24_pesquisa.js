const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    let salario, filhos, media_filhos, media_salarial, percentual, qtd_habitantes
    let soma_salario = 0, soma_filhos = 0, salarios = 0

    qtd_habitantes = Number(prompt('Informe o número  de pessoas entrevistadas: '))

    for (i = 0; i < qtd_habitantes; i++) {
        salario = Number(prompt('Informe o seu salário: '))
        filhos = Number(prompt('Informe quantidade de filhos que você tem: '))

        if (salario <= 1000) {
            salarios += salario
        }
        soma_salario += salario
        soma_filhos += filhos
       
    }
    media_salarial = soma_salario / qtd_habitantes

    media_filhos = soma_filhos / qtd_habitantes
    percentual = 

    console.log('A média salarial da população é de: ', media_salarial)
    console.log('A média de filhos é de: ', media_filhos)
    console.log('O percentual de pessoas com salário de até R$1000,00 é de: ', percentual)
}
main()
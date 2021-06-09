const prompt = require('prompt-sync')()

function main(){

    // Entrada

    console.log('             FOLHA DE PAGAMENTO             ')
    const empresa = prompt('Informe o nome da sua empresa: ')
    const vendedor = prompt('Opa doutor, nos informe o nome do vendedor: ')
    const valor_de_vendas = Number(prompt('Agora informe o valor de contribuição: '))
    let comissao = 0

    // Processamento

    if (valor_de_vendas > 5000 && valor_de_vendas <= 10000){
        comissao = (valor_de_vendas - 5000) * 5 / 100
    }else if (valor_de_vendas <= 5000){
        comissao = 0
    }else if (valor_de_vendas > 10000 && valor_de_vendas <= 30000){
        comissao = (valor_de_vendas - 5000) * 5 / 100 + (valor_de_vendas - 10000) * 10 / 100
    }else if (valor_de_vendas > 30000){
        comissao = valor_de_vendas * 20 / 100
    }

    const fixo = 1100
    const salario = comissao + fixo

    // Saída

    console.log('             FOLHA DE PAGAMENTO             ')
    console.log('---------------', empresa , '---------------')
    console.log('Vendedor: ', vendedor)
    console.log(vendedor, ', teve um total de vendas de R$: ', valor_de_vendas)
    console.log('Comissão de, R$: ', comissao)
    console.log('Salário fixo, R$: ', fixo)
    console.log('Salário final, R$: ', salario.toFixed(2))
}
main()
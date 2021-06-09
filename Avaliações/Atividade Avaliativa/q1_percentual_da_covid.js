const prompt = require('prompt-sync')()

function main(){

    // Entrada
    const media14 = Number(prompt('Informe a média de casos dos últimos 14 dias: '))
    const media_atual = Number(prompt('Informe a média de casos dos casos na data atual: '))

    // Processamento

    let percentual = (100 * media_atual) / media14
    percentual = percentual - 100
    const variacao = verificar_variacao(percentual)

    // Saida

console.log('O percentual de casos foi de: ', percentual.toFixed(2), '%, com ', variacao )

}

function verificar_variacao(resultado){

    if (resultado > -15 && resultado < 15){
         return 'os casos em estabilidade '
    } else if(resultado < -15){
        return 'os casos em queda '
    }else{
        return 'os casos em alta'
    }
}
main()

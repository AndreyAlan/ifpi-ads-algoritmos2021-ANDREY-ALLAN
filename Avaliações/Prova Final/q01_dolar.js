//Professor preferi fazer assim por que achp que fica melhor

const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

// Entrada
const dolar = Number(prompt('Qual valor (em dolares) que você quer converter? $ '))
const data = Number(prompt('Informe a data: (1-Janeiro, 2-Fevereiro, 3-Março, 4-Abril, 5-Maio, 6-Junho, 7-Julho)'))

let conversao_reais, valor_dolar

// Processameto e saida

if (data == '1') {
    valor_dolar = 5,31
    conversao_reais = dolar * valor_dolar
    console.log('$', dolar , 'dolares, correspondem a aproximadamnete:', 'R$', conversao_reais.toFixed(2), 'na cotação de Janeiro de 2021')

    } else if (data == '2') {
        valor_dolar = 5,60
        conversao_reais = dolar * valor_dolar
        console.log('$', dolar , 'dolares, correspondem a aproximadamnete:', 'R$', conversao_reais.toFixed(2), 'na cotação de Fevereiro de 2021')

    } else if (data == '3') {
        valor_dolar = 5,52
        conversao_reais = dolar * valor_dolar
        console.log('$', dolar , 'dolares, correspondem a aproximadamnete:', 'R$', conversao_reais.toFixed(2), 'na cotação de Março de 2021')

        
    } else if (data == '4') {
        valor_dolar = 5,61
        conversao_reais = dolar * valor_dolar
        console.log('$', dolar , 'dolares, correspondem a aproximadamnete:', 'R$', conversao_reais.toFixed(2), 'na cotação de Abril de 2021')

        
    } else if (data == '5') {
        valor_dolar = 5,40
        conversao_reais = dolar * valor_dolar
        console.log('$', dolar , 'dolares, correspondem a aproximadamnete:', 'R$', conversao_reais.toFixed(2), 'na cotação de Maio de 2021')

        
    } else if (data == '6') {
        valor_dolar = 5,16
        conversao_reais = dolar * valor_dolar
        console.log('$', dolar , 'dolares, correspondem a aproximadamnete:', 'R$', conversao_reais.toFixed(2), 'na cotação de Junho de 2021')

        
    } else if (data == '7') {
        valor_dolar = 5,00
        conversao_reais = dolar * valor_dolar
        console.log('$', dolar , 'dolares, correspondem a aproximadamnete:', 'R$', conversao_reais.toFixed(2), 'na cotação atual')

        
    } else {
        console.log('A data informada não é válida')

        

    }

   
}
main()
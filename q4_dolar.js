const prompt = require('prompt-sync')();

// Entrada
const valo_do_dolar = Number(prompt('Informe o valor atual do dólar: $ ')) // Recebendo valor atual do dolar
const dolar = Number(prompt('Qual valor (em dolares) que você quer converter? $ ')) // Recebendo o valor em dolares para ser convertido

// Processameto
const conversao_reais = dolar * valo_do_dolar // Calculo para converter em reais

// Saida
console.log('$', dolar , 'dolares, correspondem a aproximadamnete:', 'R$', conversao_reais.toFixed(2), 'na cotação atual' ) // Resultado final após a corversão em reais, organizado com duas casas décimais 
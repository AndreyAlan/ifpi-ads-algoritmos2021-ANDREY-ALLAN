const prompt = require('prompt-sync')();

// Entrada
const fahrenheit = Number(prompt('Informe a temperatura (em fahrenheit): °F'))

// Processamentos
const celsius = ((5 * fahrenheit - 160) / 9).toFixed(1)

// Saida
console.log('°F', fahrenheit, 'equivalem a', '°C', celsius)
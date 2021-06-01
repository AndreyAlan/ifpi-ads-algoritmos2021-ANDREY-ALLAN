const prompt = require('prompt-sync')();

// Entrada
const celsius = Number(prompt('Informe a temperatura (em celsius): °C'))

// Processamentos
const fahrenheit = ((9 * celsius + 160) / 5).toFixed(1)

// Saida
console.log('°C', celsius, 'equivalem a', '°F', fahrenheit)
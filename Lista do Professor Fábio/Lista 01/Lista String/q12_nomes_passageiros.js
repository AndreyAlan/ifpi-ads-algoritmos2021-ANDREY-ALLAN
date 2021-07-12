const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    console.log('       EMPRESA DE AVIAÇÃO       ')
    
    let nome = prompt('Informe seu nome completo: '), nome_separado
    
    nome_separado = nome.split(' ')
    
    console.log(' Olá, tudo bem?')
    console.log('Senhor', nome_separado[nome_separado.length - 1], '|' ,nome_separado[0])
    console.log('Bem vindo a nossa companhia aérea!!!')
    
    }

    main()
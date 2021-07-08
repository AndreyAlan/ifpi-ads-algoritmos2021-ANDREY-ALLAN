const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let nome, altura, peso
    let nome_alta, nome_baixa, nome_leve, nome_pesada
    let mais_alta = 0, mais_baixa = 9999, mais_leve = 9999, mais_pesada = 0
    
        
    while (nome == 'fim') {
        nome = prompt('Informe o nome da(o) modelo: ')
       
        if (nome == 'fim') {
            altura = Number(prompt('Informe a altura da(o) modelo: '))
            
            if (altura > mais_alta) {
                mais_alta = altura
                nome_alta = nome
            }
            
            if (altura < mais_baixa) {
                mais_baixa = altura
                nome_baixa = nome
            }
            peso = Number(prompt('Informe o peso da(o) modelo: '))
            
            if (peso > mais_pesada) {
                mais_pesada = peso
                nome_pesada = nome
            }
            
            if (peso < mais_leve) {
                mais_leve = peso
                nome_leve = nome

            }
        }
    }
    console.log('A modelo mais alta: ', nome_alta, 'com', mais_alta)
    console.log('A modelo mais baixa: ', nome_baixa, 'com', mais_baixa)
    console.log('A modelo mais leve: ', nome_pesada, 'com', mais_pesada)
    console.log('A modelo mais pesada: ', nome_leve, 'com', mais_leve)
    

}
    main()
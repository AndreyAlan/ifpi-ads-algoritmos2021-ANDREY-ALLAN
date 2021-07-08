const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
   
    let numero, peso
    let leve = 9999, pesado = 0, numero_leve, numero_pesado
    
    while (numero != 0) {
        numero = Number(prompt('Informe o número de identificacao: '))
        
        if (numero != 0) {
            peso = Number(prompt('Informe o peso:'))
            
            if (peso > pesado) {
                pesado = peso
                numero_pesado = numero
            }
            
            if (peso < leve) {
                leve = peso
                numero_leve = numero
            }
        }
    }
    
    console.log('O mais pesado é o número: ', numero_pesado, ', pesando', pesado, 'kg')
    console.log('O mais leve é o número: ', numero_leve, 'pesando', leve, 'kg')
}
main()
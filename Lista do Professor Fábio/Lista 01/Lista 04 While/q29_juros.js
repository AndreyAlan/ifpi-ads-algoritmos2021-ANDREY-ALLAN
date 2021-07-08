const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let investimentos, taxas
    let continuar = 'S/N', i = 0

    while (continuar == 'S/N') {
        investimentos = Number(prompt('Informe qual o valor que deseja investir: '))
        taxas = Number(prompt('Informe qual a taxa: '))
       
        while (continuar == 'S/N') {
            
            while (i < 12) {
                investimentos += ((taxas / 100) * investimentos)
                i++
            }
            
            console.log('O seu retorno do valor investido após um ano é de:', investimentos.toFixed(2))
            console.log('\nDeseja consultar o valor após mais um ano ? Se sim digite (S/N)')
            continuar = prompt('')
            
            i = 0
        }
    }
}

main()
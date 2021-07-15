const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    // Entrada

    const ano = Number(prompt('Informe um ano (1 a 2021): '))
    const mes = Number(prompt('Informe um mês (1 a 12): '))
    const dia = Number(prompt('Informe um dia (1 a 31): '))
    
    // Processamento e saída dos dados

   if (0 < ano && ano <= 2021) {
    console.log('É um ano válido')

} else {
    console.log('É um ano inválido')
    
    }
    
    if (0 < mes && mes <= 12) {
        console.log('É um mês válido')
    
    } else {
        console.log('É um mes inválido')
    }

    if (mes == 2 && 0 == dia || mes == 2 && dia >=28 ) {
        console.log('É um dia inválido')
    
    } else if (0 < dia && dia <= 31) {
        console.log('É um dia válido')


    } else {
        console.log('É um dia inválido')
    }

}
main()
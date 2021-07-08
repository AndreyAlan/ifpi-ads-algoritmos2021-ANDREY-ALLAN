const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let emprestimo = 3000, i = 1, i2 = 0

    const nome = prompt('Informe seu nome: ')
   
    
    while (emprestimo > 200) {

        if (i !== 1 && i !== 7) {
            emprestimo -= 200
            
            emprestimo += emprestimo * 0.0085
        
        } else { emprestimo += emprestimo * 0.0085 }

        
        if (i == 7) {
            i = 0
        }

        i++
        i2++
    }
    
    console.log('     CONSULTA DE EMPRESTIMO     ')
    console.log('         Banco do Brasil         ')
    console.log('Olá,', nome, '!!! É um prazer poder ajudar você')
    console.log('Você precisara de', i2, ', dias para pagar o emprestimo.')
    console.log('A equipe do BB agradece pela sua consulta!!! Tenha um ótimo dia.')
}

main()
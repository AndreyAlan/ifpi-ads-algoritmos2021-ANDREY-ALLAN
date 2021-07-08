const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    let canal, aux
    let canal2 = 0, canal4 = 0, canal5 = 0, canal7 = 0, canal10 = 0, audiencia_total = 0
    let porc, porc2, porc3, porc4, porc5

    while (canal != 0) {
        
        if (canal != 0) {
            canal = Number(prompt('Informe o qual o canal: '))
            
            if (canal == 2) {
                aux = Number(prompt('Quantas pessoas estão assistindo o canal 2:'))
                canal2 += aux
                audiencia_total += aux
            
            } else if (canal == 4) {
                aux = Number(prompt('Quantas pessoas estão assistindo o canal 4:'))
                canal4 += aux
                audiencia_total += aux
            
            } else if (canal == 5) {
                aux = Number(prompt('Quantas pessoas estão assistindo o canal 5:'))
                canal5 += aux
                audiencia_total += aux
            
            } else if (canal == 7) {
                aux = Number(prompt('Quantas pessoas estão assistindo o canal 7:'))
                canal7 += aux
                audiencia_total += aux
            
            } else if (canal == 10) {
                aux = Number(prompt('Quantas pessoas estão assistindo o canal 10:'))
                canal10 += aux
                audiencia_total += aux
            }
        }
    }
    porc = (canal2 * 100) / audiencia_total
    porc2 = (canal4 * 100) / audiencia_total
    porc3 = (canal5 * 100) / audiencia_total
    porc4 = (canal7 * 100) / audiencia_total
    porc5 = (canal10 * 100) / audiencia_total

    console.log('Canal 2 possui: ', canal2, 'telespectadores, com a porcentagem de', porc.toFixed(2),'%')
    console.log('Canal 4 possui: ', canal4, 'telespectadores, com a porcentagem de', porc2.toFixed(2),'%')
    console.log('Canal 5 possui: ', canal5, 'telespectadores, com a porcentagem de', porc3.toFixed(2),'%')
    console.log('Canal 7 possui: ', canal7, 'telespectadores, com a porcentagem de', porc4.toFixed(2),'%')
    console.log('Canal 10 possui: ', canal10, 'telespectadores, com a porcentagem de', porc5.toFixed(2),'%')
    console.log('Audicencia total foi de: ', audiencia_total)


}
main()
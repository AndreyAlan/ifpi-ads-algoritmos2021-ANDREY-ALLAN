const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    let opniao
    let idade = 1, media_idade = 0, qtd_regulares = 0, per_bom, qtd_bons = 0
    let qtd_otimos = 0, votos_total = 0, qtd_pessimo = 0
    
        while (idade > 0) {
        idade = Number(prompt('Informe a sua idade: '))
       
        if (idade > 0) {
            opniao = Number(prompt('Qual a sua opinião sobre o filme, que nota você daria entre (10, 7 e 5): '))
            
            if (opniao == 10) {
                media_idade += idade
                
                qtd_otimos++
                
                votos_total++
            
            } else if (opniao == 7) {
                qtd_bons++
                
                votos_total++
            
            } else if (opniao == 5) {
                qtd_regulares++
                
                votos_total++
            } else {
                qtd_pessimo++
                
                votos_total++
            }
        }

    }
    media_idadedade = media_idade / qtd_otimos
    per_bom = qtd_bons * 100 / votos_total

    console.log('A media de pesssoas que deram uma boa avaliação (ótimo) é de: ', media_idade)
    console.log('A quantidade de pesssoas que deram uma avaliação regular (razoável) é de: ', qtd_regulares)
    console.log('O percentual de pesssoas que avaliaram como bom é de: ', per_bom)
}


main()
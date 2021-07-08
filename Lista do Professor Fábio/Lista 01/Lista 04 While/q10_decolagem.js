const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let containers = Number(prompt('Informe o número de containers: '))
    let peso = Number(prompt('Informe o peso de cada container: '))
    var peso_total = containers * peso

    let bilhete, bagagem
    let peso_passageiros = 0, qnt_passageiros = 0, combustivel

    while (bilhete !== 0) {
        
        bilhete = Number(prompt('Informe o número do bilhete: '))
       
        if (bilhete !== 0) {
            bagagem = Number(prompt('Quantidade de bagagens: '))
            
            peso_passageiros = (70 + 10) * bagagem
            
            qnt_passageiros++
        }
    }
    combustivel = 500000 - (peso_total + peso_passageiros)
    

    console.log("Passageiros:", qnt_passageiros, "\nBagagens:", bagagem, "\nPeso dos passageiros:",
        peso_passageiros, "\nPeso da carga:", peso_total, "\nCombustível:", combustivel)

    if (combustivel < 0) {
        
        console.log('Infelizmnete a aeronave não vai poder decolarpode decolar')

    }else{console.log('\n A decolagem foi autorizada!!!')}
}

main()
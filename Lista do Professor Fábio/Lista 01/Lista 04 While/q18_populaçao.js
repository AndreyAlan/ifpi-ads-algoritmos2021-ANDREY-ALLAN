const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let populacao = 200000, populacao2 = 800000, i = 0
    
    while (populacao < populacao2) {
       
        populacao += populacao * 0.035
        
        populacao2 += populacao2 * 0.0135
        
        i++
    }
    console.log('Vão ser necessarios ', i, 'anos para a populacao da cidade 1 conseguir ultrapassar a cidade 2')
}
main()
const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    let termo, razao, n 
    let i = 0
    
    razao = Number(prompt('Informe a razão: '))
    termo = Number(prompt('Informe o termo: '))
    n = Number(prompt('Informe a quantidade de resultados: '))

    while (i < n) {
        
        console.log(termo + (razao * i))
        
        i++
    }
}
main()
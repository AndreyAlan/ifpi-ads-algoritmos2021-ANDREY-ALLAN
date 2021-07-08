const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

   
    let termo, razao, n
    let i = 0
    
 
    razao = Number(prompt('Insira a razão:'))
    termo = Number(prompt('Insira o termo:'))
    n = Number(prompt('Insira a quantidade de resultados: '))
    
    while (i < n) {
        console.log(termo * Math.pow(razao, i))
        
        i++
    }
}
main()
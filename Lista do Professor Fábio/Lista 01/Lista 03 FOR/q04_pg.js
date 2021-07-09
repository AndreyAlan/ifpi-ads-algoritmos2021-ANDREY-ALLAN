const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let termo, limites, razao
    let i
    
    termo = Number(prompt('Informe o termo:'))
    limites = Number(prompt('Informe o limite:'))
    razao = Number(prompt('Informe a razão:'))

    for (; termo < limites; termo = (termo * razao)) { 
        
        console.log(termo)
    }
}
main()
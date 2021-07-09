const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    const inicio = Number(prompt('Informe um valor inicial: '))
    const final = Number(prompt('Informe um valor final: '))
    
    for (let i = inicio; i <= final; i++) {
        
        if (i % 2 != 0) {
            
            console.log(i)
        }
    }
}
main()
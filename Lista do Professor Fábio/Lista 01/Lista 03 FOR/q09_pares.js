const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let i

    const inicio = Number(prompt('Informe um valor inicial: '))
    const final = Number(prompt('Informe um valor final: '))

    
    for (i = inicio; i <= final; i++) {
       
        if (i % 2 != 0) {
            continue
        }
        
        console.log(i)
    }
}
main()
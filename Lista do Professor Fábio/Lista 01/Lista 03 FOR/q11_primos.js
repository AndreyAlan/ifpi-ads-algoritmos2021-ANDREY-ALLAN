const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    const inicio = Number(prompt('Informe um valor inicial: '))
    const final = Number(prompt('informe um valor final: '))

    
    for (let i = inicio; i <= final; i++) {
        
        let flag = 0

        for (let i2 = 2; i2 < i; i2++) {
            if (i % i2 == 0) {
                
                flag = 1
            }
        }
        
        if (i > 1 && flag != 1) {
            
            console.log(i)
        }
    }
}
main()
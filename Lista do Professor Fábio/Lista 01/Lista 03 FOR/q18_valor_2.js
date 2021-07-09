const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let s = 0
    const n_final = Number(prompt('Informe o valor final de N: '))
    

    for (let i = 1; i <= n_final; i++) {
     
        s += i / (n_final - (i - 1))
    }

    console.log('O valor de S é: ', s.toFixed(2))
 
}
main()
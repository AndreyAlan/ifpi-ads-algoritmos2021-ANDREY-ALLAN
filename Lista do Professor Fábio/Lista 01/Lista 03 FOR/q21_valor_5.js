const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let s, numero = 1, n_final = 99


    for (i = 1; i <= n_final; i++) {
        
        s = numero / i
        
        numero += 2

        
        if (s == 99 / 50) {
            break
        }
    }
    console.log('O valor de S é: ', s.toFixed(2))
}
main()
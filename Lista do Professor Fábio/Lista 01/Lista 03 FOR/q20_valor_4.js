//Não entedi muito bem o raciocinio dessa questão

const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    
    let s = 0
    const n_final = Number(prompt('Informe o valor final de N: '))
   

    for (let i = 1; i <= n_final; i++) {
       
        if (i % 2 != 0) {
            s += 1 / i
        }
        
        else if (i % 2 == 0) {
            s -= 1 / i
        }
    }
    
    console.log('O valor de S é: ', s.toFixed(2))
}
main()
const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

let dividendo
let divisor
let i = 0

    
    dividendo = Number(prompt('Informe o dividendo: '))
    divisor = Number(prompt('Informe o divisor  : '))
    
    while((divisor * i < dividendo) || (divisor * i != dividendo) ){
    
        i++
    }
    
    console.log('O resultado é igual a: ', i)
    console.log('O resto é igual a: ', (divisor * i) - dividendo)
    
}
    main()
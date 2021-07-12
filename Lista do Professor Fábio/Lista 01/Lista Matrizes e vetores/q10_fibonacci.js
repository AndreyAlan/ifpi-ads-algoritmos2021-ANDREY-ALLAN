const prompt = require('prompt-sync')({
    sigint: true
})

function main() {


    let numero  = Number(prompt('Informe quantos números deseja conferir: ')) - 2, anterior = 0,
    anterior2 = 1, resultado
    
    
    console.log('0')
    console.log('1')

    for(let i = 0; i < numero; i++) {
        
        resultado = anterior + anterior2
        
        
        console.log('É igual a: ', resultado)
        
        anterior = anterior2
        anterior2 = resultado
    }
}
main() 
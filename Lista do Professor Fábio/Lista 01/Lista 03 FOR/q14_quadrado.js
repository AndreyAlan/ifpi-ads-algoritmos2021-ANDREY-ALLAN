const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let numero, quadrado, maior
    
    numero = Number(prompt('Informe um número: '))
    
    for (let i = 1; i < numero; i++) {
        quadrado = i
        
        quadrado = quadrado * quadrado
        
        console.log(quadrado)
        
        if (quadrado <= numero) {
            maior = quadrado
        
        } else if (quadrado > numero) {
            break
        }
    }
    
    console.log(maior)
}
main()
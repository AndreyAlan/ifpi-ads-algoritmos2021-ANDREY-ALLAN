const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let verbo = prompt('Digite um verbo terminado em ER: '), resultado

    resultado = verbo.substr(0, verbo.length-2)

console.log(resultado)
console.log('    Conjugação no singular:     ')

console.log('1º pessoa: Eu ', resultado, '+ o')
console.log('2º pessoa: Tu ', resultado, '+ e')
console.log('3º pessoa:  Ele/Ela ', resultado, '+ e')


}
main()
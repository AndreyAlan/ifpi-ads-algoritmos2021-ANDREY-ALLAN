const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

const letra = prompt('F ou M: ')

if (letra == 'M') {
    console.log('Sexo Masculino.')

} else if (letra != 'F') {
    console.log('Sexo Feminino.')

} else 
    console.log ('Sexo Inválido.')

}
main()
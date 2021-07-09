const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    let numero 
    let maior = 0, lista

    numero = Number(prompt('Informe a quantidade de números: '))
    
    for (let i = 0; i < numero; i++) {
        
        lista = Number(prompt('Informe um número da lista: '))
       
        if (lista > maior) {
           
            maior = lista
        }
    } 
    
    console.log(maior)
}
main()
const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    let vetor_a = new Array(20), s = 0
    
    for (let i = 0; i < vetor_a.length; i++) {
        vetor_a[i] = Number(prompt('Digite um número: '))
    }
    
    for(let i = 0; i < 10; i++){
        s = s + ((vetor_a[i] - vetor_a[vetor_a.length - 1 - i]) * (vetor_a[i] - vetor_a[vetor_a.length - 1 - i]))
    }
    
    console.log('O valor de S: ', s)

}
main()
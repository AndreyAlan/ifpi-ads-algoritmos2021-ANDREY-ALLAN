const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let n = Number(prompt('Informe a quantidade de números que deseja conferir: ')),
    a = new Array(n), b = new Array(n), repetido_a = 0, repetido_b = 0
    
    for (let i = 0; i < n; i++) {
        a[i]= prompt('Informe os elementos: ')
        
    }

    for (let i = 0; i < n; i++) {
        
        if(a[i] % 2 == 0){
            b[i] = 0

            repetido_a++
        }
        
        else{
            b[i] = 1
            
            repetido_b++
        }
    }
    console.log('O valor de A: ', a)
    console.log('O valor de B: ', b)
    console.log('Possui ', repetido_a, ' número(s) repetido(s) em A')
    console.log('Possui ', repetido_b, ' número(s) repetido(s) em B')
}
main()
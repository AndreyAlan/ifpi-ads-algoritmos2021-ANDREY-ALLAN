const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    const n = Number(prompt('Informe a quatidade de elementos: '))

    let vetor_a = Array(n),
    vetor_b = Array(n)

    for(let i = 0; i < n; i++) {
        
        vetor_a[i] = Number(prompt(`Informe os elementos ${i}: `))

    }

    let j = vetor_b.length - 1

    for(item of vetor_a) {
        vetor_b[j] = item
        j--

    }


}
main()
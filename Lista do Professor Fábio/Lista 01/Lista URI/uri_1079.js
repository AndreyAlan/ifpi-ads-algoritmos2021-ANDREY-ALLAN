const prompt = require('prompt-sync')({
    sigint: true
})

function main() {


    console.log('          BOLETIM ESCOLAR          ')
    console.log('___________________________________')
    
    const nome = prompt('Informe seu nome: ')
    const numero = Number(prompt('Informe a quantidade de teste feitos por você: '))
    
    let i = 1

    for(i; i <= numero; i++ ){
        
        let nota1 = Number(prompt('Informe a primeira nota: ')), nota2 = Number(prompt('Informe a segunda nota: ')), nota3 = Number(prompt('Informe a terceira nota: '))

        const media = calc_media(nota1, nota2, nota3)

        
        console.log('         BOLETIM ESCOLAR         ')
        console.log('_________________________________') 
        console.log('Aluno                            : ', nome)
        console.log('Media do aluno                   : ', media.toFixed(1))
        console.log('IFPI - Instituto Federal do Piauí - Campus Teresina Central')


        console.log('-------PRESSIONE CTRL + C PARA ENCERRAR O PROGAMA-------')
    }

}


function calc_media(nota1, nota2, nota3){
    
    return media = (nota1 * 2) + (nota2 * 3) + (nota3 * 5) / 10
}

main()
const prompt = require('prompt-sync')()

function main(){

    // Entrada

    const valor1 = Number(prompt('Insira um valor do primeiro critério de 0 a 1000: '))
    const valor2 = Number(prompt('Insira um valor do segundo critério de 0 a 1000: '))
    const valor3 = Number(prompt('Insira um valor do terceiro criteiro de 0 a 1000: '))

    score (valor1,  valor2, valor3) // Determinando funções
    score2 (valor1, valor2, valor3) // Determinando funções

    // Processamento e saida dos dados recebidos

    function score(valor1, valor2, valor3){
    const score = ((valor1 * 0.26) + (valor2 * 0.57) + (valor3 * 0.17))
    if (score > 800 && score <= 1000){
        console.log('O seu score 1.0 é de: ', score,': o que considerado como um score MUITO BOM')
    }else if (score > 600 && score <= 800){
       console.log('O seu score 1.0 é de: ', score,':o que considerado como um score BOM')
    }else if(score > 400 && score <= 600 ){
        console.log('O seu score 1.0 é de: ', score,':o que considerado como um score REGULAR')
    }else{
        console.log('O seu score 1.0 é de: ', score,': o que considerado como um score RUIM')
    }
}
function score2(valor1, valor2, valor3){
    const score2 = ((valor1 * 0.62) + (valor2 * 0.19) + (valor3 * 0.19))
    if (score2 > 700 && score2 <= 1000){
        console.log('O seu score 2.0 é de: ', score2,': o que considerado como um score MUITO BOM')
    }else if (score2 > 500 && score2 <= 700){
       console.log('O seu score é de: ', score2,':o que considerado como um score BOM')
    }else if(score2 > 300 && score2 <= 500 ){
        console.log('O seu score é de: ', score2,':o que considerado como um score REGULAR')
    }else{
        console.log('O seu score é de: ', score2,':o que considerado como um score RUIM')
    
    }
}
}
main()
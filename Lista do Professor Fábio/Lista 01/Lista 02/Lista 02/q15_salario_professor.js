const prompt = require('prompt-sync')()
function main(){
    
    // Entrada

    const horas = prompt('Informe a quantidade de horas do primeiro professor: ')
    const custo_por_hora = prompt('Informe o valor por hora do primeiro professor: ')
   
    const horas2 = prompt('Informe a quantidade de horas do segundo professor: ')
    const custo_por_hora2 = prompt('Informe o valor por hora do segundo professor: ')
    
    // Processamento e saída dos dados recebidos

    if ((horas * custo_por_hora) > (horas2 * custo_por_hora2)){
        console.log('O primeiro professor tem o maior salário')
    }else if((horas * custo_por_hora) < (horas2 * custo_por_hora2)){
        console.log('O segundo professor tem o maior salário')
    }else{
        console.log('Os professores tem os salários iguais.')
    }
}
main()
const prompt = require('prompt-sync')()

function main(){

    let ano_result = 0, mes_result = 0, dia_result = 0;
    
    // Entrada

    const nasc_ano = Number(prompt('Ano de nascimento: '))
    const nasc_mes = Number(prompt('Mês de nascimento: '))
    const nasc_dia = Number(prompt('Dia do nascimento: '))

    const atual_ano = Number(prompt('Ano atual: '))
    const atual_mes = Number(prompt('Mês atual: '))
    const atual_dia = Number(prompt('Dia atual: '))
    
    // Processamento dos dados recebidos

    ano_result = atual_ano - nasc_ano 

    if (nasc_mes > atual_mes){
        mes_result = nasc_mes - atual_mes
    }else{
        mes_result = atual_mes - nasc_mes
    }

    if(nasc_dia > atual_dia){
        dia_result = nasc_dia - atual_dia
    }else{
        dia_result = atual_dia - nasc_dia
    }

    // Saída
    console.log('Você tem', ano_result, 'anos', mes_result, 'meses e', dia_result, 'dias')
    console.log('Nasceu no dia', nasc_dia, '/', nasc_mes, '/', nasc_ano)
}
main()
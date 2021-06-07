const prompt = require('prompt-sync')()
function main(){
    
    let resultado_anos = 0, resultado_mes = 0, resultado_dia = 0;
    
    // Entrada

    const nasc_ano = Number(prompt('Informe o seu ano de nacismento: '))
    const nasc_mes = Number(prompt('Agora o mês: '))
    const nasc_dia = Number(prompt('E por ultimo o dia: '))

    const atual_ano = Number(prompt('Agora informe o ano em que estamos: '))
    const atual_mes = Number(prompt('O mês: '))
    const atual_dia = Number(prompt('E agora o dia: '))
    
    // Processamento dos dados recebidos

    resultado_anos = atual_ano - nasc_ano 

    if (nasc_mes > atual_mes){
        resultado_mes = nasc_mes - atual_mes
    }else{
        resultado_mes = atual_mes - nasc_mes
    }

    if(nasc_dia > atual_dia){
        resultado_dia = nasc_dia - atual_dia
    }else{
        resultado_dia = atual_dia - nasc_dia
    }

    //Saída

    console.log('Opa doutor, parece que você tem', resultado_anos, 'anos', resultado_mes, 'meses e', resultado_dia, 'dias.')
}
main()
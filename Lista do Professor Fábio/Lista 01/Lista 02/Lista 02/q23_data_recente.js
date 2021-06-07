const prompt = require('prompt-sync')()

function main(){
    
    // Entrada
    
    console.log ('Data 1')
    const ano = Number(prompt('Informe o ano: '))
    const mes = Number(prompt('Informe o mês: '))
    const dia = Number(prompt('Informe o dia: '))

    console.log('Data 2')
    const ano2 = Number(prompt('Informe a outra data (ano): '))
    const mes2 = Number(prompt('Mês: '))
    const dia2 = Number(prompt('Dia: '))
    
    //Processamento e saida dos dados recebidos

    if ( ano > ano2 ){
        console.log('Data 1 mais recente')
    }else if(ano2 > ano){
        console.log('Data 2 mais recente')
    }else{
        if(mes > mes2){
            console.log('Data 1 mais recente')
        }else if(mes2 > mes){
            console.log('Data 2 mais recente')
        }else{
            if(dia > dia2){
                console.log('Data 1 mais recente')
            }
            else if(dia2 > dia){
                console.log('Data 2 mais recente')
            }else{
                console.log('As datas são iguais')
            }
        }
    }
}
main()
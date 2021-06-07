const prompt = require('prompt-sync')()

function main(){
    
    // Entrada

    const hora_inicio = Number(prompt('Informe a hora de início: '))
    const minuto1 = Number(prompt('Informe o minuto de início: '))
    const hora_fim = Number(prompt('Informe a hora do término: '))
    const minuto2 = Number(prompt('Informe o minuto do término: '))

    // Processamento e saida dos dados recebidos
    
    if(hora_inicio > hora_fim && minuto1 > minuto2){
        const horas_total = (24 - (hora_inicio - hora_fim)) - 1
        const minutos_total = 60 - (minuto1 - minuto2)
        console.log('O jogo teve duração de', horas_total, 'horas, e', minutos_total, 'minutos') 
    
    }else if(hora_inicio > hora_fim && minuto1 < minuto2){
        var horas_total = (24 - (hora_inicio - hora_fim)) - 1
        var minutos_total = minuto2 - minuto1
        console.log('O jogo teve duração de', horas_total, 'horas e', minutos_total, 'minutos') 
    
    }else if(hora_inicio < hora_fim && minuto1 > minuto2){
        const horas_total = (hora_fim - hora_inicio) - 1
        const minutos_total = 60 - (minuto1 - minuto2)
        console.log('O jogo teve duração de', horas_total, 'horas e', minutos_total, 'minutos') 
    
    }else if(hora_inicio < hora_fim && minuto1 < minuto2){
        var horas_total = hora_fim - hora_inicio
        var minutos_total = minuto2 - minuto2
        console.log('O jogo teve duração de', horas_total, 'horas e', minutos_total, 'minutos') 
    }
}
main()
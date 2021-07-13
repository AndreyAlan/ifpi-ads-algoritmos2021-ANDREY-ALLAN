const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    console.log('       RELÓGIO       ')
    
    let horas = prompt('Ingorme um horário em ( horas: minutos: segundos): '), hora = '', minuto = '', segundos = ''
    
    hora += horas[0] + horas[1] + ' hora(s) '
    minuto += horas[3] + horas[4] + ' minuto(s) '
    segundos += horas[6] + horas[7] + ' segundo(s) '

 console.log(hora, ':', minuto, ':', segundos)

}

main()
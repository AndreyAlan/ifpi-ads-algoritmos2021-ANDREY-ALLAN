const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    console.log('dd/mm/aa       CALENDARIO       dd/mm/aa')
    
    let data = prompt('Informe a data em DIA/MÊS/ANO: ') , dia = '', mes, ano = ''

    dia += data[0] + data[1]

    ano += data[6] + data[7] + data[8] + data[9]
    
    if (data[3] == 0 && data[4] == 1) {
        mes = 'Janeiro'
    
    } else if (data[3] == 0 && data[4] == 2) {
        mes = 'Fevereiro'
    
    } else if (data[3] == 0 && data[4] == 3) {
        mes = 'Março'
    
    } else if (data[3] == 0 && data[4] == 4) {
        mes = 'Abril'
    
    } else if (data[3] == 0 && data[4] == 5) {
        mes = 'Maio'
   
    } else if (data[3] == 0 && data[4] == 6) {
        mes = 'Junho'
    
    } else if (data[3] == 0 && data[4] == 7) {
        mes = 'Julho'
    
    } else if (data[3] == 0 && data[4] == 8) {
        mes = 'Agosto'
    
    } else if (data[3] == 0 && data[4] == 9) {
        mes = 'Setembro'
    
    } else if (data[3] == 1 && data[4] == 0) {
        mes = 'Outubro'
    
    } else if (data[3] == 1 && data[4] == 1) {
        mes = 'Novembro'
    
    } else if (data[3] == 1 && data[4] == 2) {
        mes = 'Dezembro'
    }

    console.log(dia, '/', mes, '/', ano)
}
main()
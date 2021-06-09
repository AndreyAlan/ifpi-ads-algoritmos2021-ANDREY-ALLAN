const prompt = require('prompt-sync')()

function main(){

    // Entrada

    console.log('          TALÃO DE ENERGIA          ')
    const leitura_atual = Number(prompt('Informe os dados da leitura atual (KWh): '))
    const leitura_anterior = Number(prompt('Informe os dados da leitura anterior (KWh): '))

    let consumo = leitura_atual - leitura_anterior
    let consumo_total

    // Processamento de dados

    if (consumo <= 30){
        consumo_total = 0
    
    }else if(consumo > 30 && consumo <= 100 ) {
        consumo_total = consumo * 0.59
    }else{
        consumo_total = consumo * 0.75
    }
    const icms = consumo_total * 0.25 // IMCS
    const pis_confis = consumo_total * 0.15 // PIS/CONFIS
    let iluminacao = consumo_total * 0.06 // Iluminação publica
    
    if (consumo < 80){
    iluminacao = 0
    }
    const bandeira = Math.trunc(consumo / 100) * 8
    const valor_total = consumo_total + pis_confis + icms + iluminacao + bandeira
    
    // Saida
    console.log('          TALÃO DE ENERGIA          ')
    console.log('Seu consumo foi de: R$', consumo, 'KHw')
    console.log('Bandeira: R$', bandeira.toFixed(2))
    console.log('O valor faturado foi de: R$', consumo_total.toFixed(2))
    console.log('ICMS: R$', icms.toFixed(2))
    console.log('PIS/CONFIS: R$', pis_confis.toFixed(2))
    console.log('Taxa de iluminação publica: R$', iluminacao.toFixed(2))
    console.log('O valor total a ser pago por você e de: R$', valor_total.toFixed(2))
}

main()
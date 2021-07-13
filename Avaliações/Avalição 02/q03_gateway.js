const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    

    const valor = Number(prompt('Informe o valor da compra: '))
    const dias = Number(prompt('Informe a quantidade de que desjea receber sua compra (2, 14 ou 31): '))
    const forma_pagamento = prompt('Informe a forma de pagamento (1- a vista | 2- prazo?): ')
    

    let parcelas = 0, total = 0, dias2, taxa
   
    if(forma_pagamento == '1') {
        
        if(dias > 14) {
            
            taxa = 2.99
            dias2 = 31
        
        }else if(dias > 2 && dias <=14){
            taxa = 3.49
            dias2 = 14
        
        }else if(dias <= 2){
            taxa = 4.49
            dias2 = 2
        }
    
    }else if(forma_pagamento == '2') {
        parcelas = Number(prompt('Informe a quatidade de parcelas: '))
        
        if(dias > 14) {
            taxa = 3.49
            dias2 = 31
        
        }else if(dias > 2 && dias <=14){
            taxa = 3.99
            dias2 = 14
        
        }else if(dias <= 2){
            taxa = 4.99
            dias2 = 2
        }
    }

    total = valor * taxa / 100 + 0.40

        if(parcelas != 0){
            total = total + (valor / 100) * parcelas
        }


        console.log('Valor da compra: ', valor)
        console.log('Forma de pagamento: ', forma_pagamento)
        console.log('Parcelas: ', parcelas)
        console.log('Taxa: ', total.toFixed(2))
        console.log(`Valor total: ${(valor - total).toFixed(2)} é recebera em ${dias} dias`)


}
main()
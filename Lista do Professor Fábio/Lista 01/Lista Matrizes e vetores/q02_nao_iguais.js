const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    let numero = Number(prompt('Informe quantos números deseja conferir: ')),
    elementos = new Array(numero), repetido = 0, contador = 0
    
    for (let i = 0; i < numero; i++) {
        elementos[i]= prompt('Informe os elementos: ')
        
    }

    for (let i = 0; i < numero; i++) {
        
        for (let i2 = 0; i2 < numero; i2++) {
            
            if((i != i2) && (elementos[i] == elementos[i2])){
                repetido = true
                contador++
                break
            }
        }
    }
   
    if(repetido == true){
        
        console.log('Contem', contador, 'elementos repetidos')
    
    }else{
        
        console.log('Não contem nenhum elemento repetido')
    }
}
main()
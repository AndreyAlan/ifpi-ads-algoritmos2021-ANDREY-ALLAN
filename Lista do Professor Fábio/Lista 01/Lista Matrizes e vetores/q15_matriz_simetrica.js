const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let numero  = 2, matriz = new Array(numero), i = 0
    
    for(i = 0; i < numero; i++ ){
        
       matriz[i] = new Array(numero)
    }
    
    for(let i = 0; i < numero; i++) {
       
        for (let j = 0; j < numero; j++) {
            
            matriz[i][j] = Number(prompt(`Informe o termo ${i}, ${j} : `))
        }
    }
  
    if(matriz[0][0] == matriz[1][1] && matriz[1][0] == matriz[0][1]){
       
        console.log('O quadrado é igual á: ')
    }

    console.log(matriz)
}

main()
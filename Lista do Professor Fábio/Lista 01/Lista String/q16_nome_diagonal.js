const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let texto = prompt('Insira o texto (de até 20 caracteres): '), coluna = 5, espacos = '', i = 0
   
    for (i; i < texto.length; i++) {
      
        for (let i2 = 1; i2 < coluna; i2++) {
            espacos += '.'
        }
        
        console.log(espacos, texto[i])
    }
} 
main()
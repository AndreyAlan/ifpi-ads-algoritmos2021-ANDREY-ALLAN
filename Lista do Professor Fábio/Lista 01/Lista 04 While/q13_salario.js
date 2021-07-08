const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
      
    while (salario != 0) {
        var salario = Number(prompt('Informe o salario:'))
        
        if (salario != 0) {
            
            if (salario < 3000) {
                salario += salario * 0.25
                
                console.log('Seu novo salario é de: ', salario, 'é teve um aumento de 25%')
            }
            
            else if (salario >= 3000 && salario < 6000) {
                salario += salario * 0.20
                
                console.log('Seu novo salario é de: ', salario, 'é teve um aumento de 20%')
            
            } else if (salario >= 6000 && salario < 10000) {
                salario += salario * 0.15
                
                console.log('Seu novo salario é de: ', salario, 'é teve um aumento de 15%')
            
            } else if (salario >= 10000) {
                salario += salario * 0.10
               
                console.log('Seu novo salario é de: ', salario, 'é teve um aumento de 10%')
            }
        }
    }
}


main()
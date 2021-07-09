const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    let num_bois, peso , nome, id
    let leve = 9999, pesado = 0, mais_leve, mais_pesado 
   
    num_bois = Number(prompt('Informe o número de bois que dejesa consultar: '))
    
    for (let i = 0; i < num_bois; i++) {
       
        id = Number(prompt('Informe o número de identificação do boi: '))
        
        nome = Number(prompt('Informe o "nome" do boi: '))

            peso = Number(prompt('Informe o peso do boi: '))
            
            if (peso > pesado) {
                pesado = peso
                mais_pesado = id
            }
           
            if (peso < leve) {
                leve = peso
                mais_leve = id
            }
        
    }
    console.log('O boi', mais_pesado, 'é o mais gordo, pesando: ',pesado, 'kg')
    console.log('O boi', mais_leve, 'é o mais magro pesando', leve, 'kg')
}
main()
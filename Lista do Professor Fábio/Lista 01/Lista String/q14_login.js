const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    let nome = prompt('Insira seu nome: '), login = ' ', i = 0
    
    login += nome[0]

    for (i; i < nome.length; i++) {
        
        if (nome[i] == ' ') {
            
            login += nome[i + 1]
       
        }
        
    }
    console.log('Olá senhor' ,nome)
    console.log('O seu login é', login)
}
main()
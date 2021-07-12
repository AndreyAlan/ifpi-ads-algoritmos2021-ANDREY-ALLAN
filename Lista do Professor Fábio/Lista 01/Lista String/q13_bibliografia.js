// Tive uma ajuda de amigo progamador aqui kkkkk, não tava conseguindo fazer funcionar de jeito maneira

const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let nome = prompt('Informe seu nome completo: '), abreviatura = '', nome_separado = nome.split(' '), i = 0
   
    while(i < nome_separado.length - 1){

        abreviatura = abreviatura + (nome_separado[i][0] + '.')
        
        i++
    }
    
    console.log(nome_separado[nome_separado.length - 1],', ',abreviatura, '.')
    }
    
    main()
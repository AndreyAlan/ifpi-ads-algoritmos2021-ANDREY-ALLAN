const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let idade, sexo, estado_civil
    let pessoas = 0, idade_mulher = 0, idade_homem = 0, solteiros = 0, solteiras = 0, solteiras30 = 0;
    
    while(pessoas < 4){
        sexo = Number(prompt('Informe o seu sexo (1-masculino, 2-feminino): '))
        idade = Number(prompt('Informe a sua idade: '))
        estado_civil = Number(prompt('Informe o seu estado civil (1-casado, 2-solteiro, 3-divorciado, 4-viúvo): '))
    
        if(sexo == 1){
            idade_homem = idade_homem + idade
    
        }else if(sexo = 2){
            idade_mulher = idade_mulher + idade
        }
    
        if(estado_civil == 2 && sexo == 1){
            solteiros++
    
        }else if(estado_civil == 2 && sexo == 2){
            solteiras++
        }
    
        if(idade > 30 && sexo == 2){
            solteiras30++
        }
    
    
        pessoas++
    }
   
    var media_homem = idade_homem/100
    var media_mulher = idade_mulher/100
    
    console.log('A média de idade dos homens é de: ', media_homem)
    console.log('A média de idade das mulheres  :', media_mulher)
    console.log('O percentual de homens solteiros:', solteiros, '%')
    console.log('O percentual de mulheres solteiras:', solteiras ,'%')
    console.log('A quantidade de mulheres divorciadas com idade em media de 30 anos pra cima é de: ', solteiras30)
    
}
    main()
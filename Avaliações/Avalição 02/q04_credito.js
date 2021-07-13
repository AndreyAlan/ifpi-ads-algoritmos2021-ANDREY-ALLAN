const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    console.log('$$         Blue Tech Bank          $$')
    
    const nome = prompt('Informe seu nome: ')
    let emprestimo = Number(prompt('Informe o valor do empréstimo: '))
    const parcela = Number(prompt('Informe o valor da parcela: '))
    
    let juros = 1, mes = 1
    
    stop = false
    
    while(emprestimo > 0){
        
        console.log('Seu saldo anterior: ', emprestimo.toFixed(2))
        
        emprestimo = (emprestimo - parcela) 
        
        if(emprestimo - parcela < 0){
            emprestimo = parcela - emprestimo
            stop = true
        }
        juros = (emprestimo / 100)
        emprestimo = emprestimo + juros
        
        console.log('$$         Blue Tech Bank          $$')
        console.log('             EMPRESTIMO              ')
        console.log('Olá senhor ', nome, '!!! Bem vindo ao nosso banco')
        console.log('_____________________________________')

        console.log('Saldo atual:                       R$', emprestimo.toFixed(2))
        console.log('Juros:                             R$', juros.toFixed(2))
        console.log('Parcela fixa:                      R$', parcela.toFixed(2))
    
        mes++
        
        if(stop == true){
            break
        }
    }
    console.log('Quantidade de meses para pagar a divida toda: ', mes)
    console.log('A ultima parcela é no valor de: ', emprestimo.toFixed(2))
    }    

    main()
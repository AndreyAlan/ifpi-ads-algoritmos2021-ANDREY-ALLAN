const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let id, horas, dependentes, salario, salario2, inss, ir
    
    for (let i = 0; i < funcionario; i++) {
   
        const nome = prompt('Informe seu nome: ')
        id = Number(prompt('Informe o ID do funcionário: '))
        horas = Number(prompt('Informe o número de horas trabalhadas: '))
        dependentes = Number(prompt('Informe o número de dependetes: '))

        
        salario = (horas * 12) + (dependentes * 40)
        
        inss = 0.08 * salario
       
        ir = 0.05 * salario
        
        salario2 = salario - (inss + ir)

        console.log('          FICHA DA EMPRESA          ')
        console.log('Funcionário                : ',  nome)
        console.log('____________________________________')
        console.log('N° de dependetes           : ', dependentes)
        console.log('O valor descontado do INSS : R$', inss.toFixed(2))
        console.log('O valor descontado do IR   : R$', ir.toFixed(2))
        console.log('O salário líquido é de     : R$', salario2.toFixed(2))
        
        
    }
}
main()
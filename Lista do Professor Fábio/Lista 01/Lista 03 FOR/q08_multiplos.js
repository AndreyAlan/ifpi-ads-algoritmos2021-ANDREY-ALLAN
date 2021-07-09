const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    const numero = Number(prompt('Informe um número: '))
    const inicio = Number(prompt('Informe um valor inicial: '))
    const final = Number(prompt('Informe um valor limite final: '))
    
    console.log('Os multiplos de', numero, 'no intervalo de: ', inicio, 'até o', final, 'são: ')
    
    for (let i = inicio; i <= final; i++) {
      
        if (i < inicio && i % numero === 0) {
        
            console.log(i)
      }
    }
  }
  main()
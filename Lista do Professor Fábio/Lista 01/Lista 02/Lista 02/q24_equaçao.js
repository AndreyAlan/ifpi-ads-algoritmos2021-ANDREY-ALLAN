const prompt = require('prompt-sync')()

function main(){
   
    // Entrada
  
    const variavel_a = Number(prompt('Informe o coeficiente a: '))
    const variavel_b = Number(prompt('Informe o coeficiente b: '))
    const variavel_c = Number(prompt('Informe o coeficiente c: '))
  
    // Processamento e saida dos dados recebidos

    if(a == 0){
        console.log('Opa doutor, parece que o valor que você deu para o coeficiente "a" é inválido.')
    }else{
        const delta = Math.pow(variavel_b,2)-4 * variavel_a * variavel_c
        console.log('O valor de delta é: ', delta)
        const raiz1 = ((variavel_b - 2 * variavel_b) + Math.sqrt(delta))/(2 * variavel_a)
        const raiz2 = ((variavel_b - 2 * variavel_b) - Math.sqrt(delta))/(2 * variavel_a)
        console.log('O valor de x1 é: ', raiz1)
        console.log('O valor de x2 é: ', raiz2)
    }
}
main()
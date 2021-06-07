const prompt = require('prompt-sync')()
function main(){
    
    // Entrada

    const num1 = Number(prompt('Informe o primeiro número: '))
    const num2 = Number(prompt('Informe o segundo número: '))
    const num3 = Number(prompt('Informe o terceiro número: '))
    const num4 = Number(prompt('Informe o quarto número: '))
    const num5 = Number(prompt('Informe o quinto número: '))
    
    
    // Processamento e saida dos dados recebidos

    if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){
        console.log('O maior número entre eles é o: ', num1)
    }else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){
        console.log('O maior número entre eles é o: ', num2)
    }else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5){
        console.log('O maior número entre eles é o: ', num3)
    }else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5){
        console.log('O maior número entre eles é o: ', num4)
    }else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4){
        console.log('O maior número entre eles é o: ', num5)
    }
    
    if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5){
        console.log('O menor número entre eles é o: ', num1)
    }else if (num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5){
        console.log('O menor número entre eles é o: ', num2)
    }else if (num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5){
        console.log('O menor número entre eles é o: ', num3)
    }else if (num4 < num1 && num4 < num2 && num4 < num3 && num4 < num5){
        console.log('O menor número entre eles é o: ', num4)
    }else if (num5 < num1 && num5 < num2 && num5 < num3 && num5 < num4){
        console.log('O menor número entre eles é o: ', num5)
    }
}
main()
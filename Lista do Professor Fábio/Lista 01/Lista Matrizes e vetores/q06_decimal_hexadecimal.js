const prompt = require('prompt-sync')({
    sigint: true
})

function main() { 
    
    let numero =  String(prompt('Digite um número binário com 8 dígitos: ')),
    algoritimo = numero.split(''), decimal = 0, hexadecimal = 0
    

    if(numero.length === 8){
       decimal = decimal2(numero)
       hexadecimal = hexadecimal2(decimal, 16)
    
        console.log('O valor número em decimal é:', decimal)
        console.log('O valor número em hexadecimal é: ', hexadecimal)
    
    }else if(numero.length < 8){
        console.log('O número informado tem menos de 8 dígitos')
    
    }else{
        console.log('O número informado tem mais de 8 digitos')
    }
    
    
    
}

function decimal2(dec){
    let decimal3 = 0
    for (let i2 = dec.length - 1, i = 0; i2 >= 0; i2--, i++) {
        decimal3 += dec[i2] * Math.pow(2, i);
      }
      return decimal3
}
function hexadecimal2(hex)
{
  if (hex < 0){
    hex = 0xFFFFFFFF + hex + 1;
  }
  return hex.toString(16).toUpperCase();
}

main()
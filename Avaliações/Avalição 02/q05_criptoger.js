const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let frase = prompt('Informe a frase:'), metade1 = '', metade2 = '', invertida = '', i

    if (frase.length % 2 == 0) { 
        let meio = (frase.length / 2) - 1
        
        for (i = meio; i >= 0; i--) { 
            metade1 += frase[i]
        }

        for (i = (frase.length - 1); i > meio; i--) {
            metade2 += frase[i]
        }
        invertida += metade1 + metade2
    
    } else {
        let meio = ((frase.length - 1) / 2) - 1
       
        for (i = meio; i >= 0; i--) { 
            metade1 += frase[i]
        }

        for (i = frase.length - 1; i > meio; i--) {
            metade2 += frase[i]
        }

        invertida += metade1 + metade2
    }

    let vogais = ''
    
    for (i = 0; i < invertida.length; i++) {
        
        if (invertida[i] == 'a') {
            vogais += '1'
            continue
        
        } else if (invertida[i] == 'e') {
            vogais += '2'
            continue
        
        } else if (invertida[i] == 'i') {
            vogais += '3'
            continue
        
        } else if (invertida[i] == 'o') {
            vogais += '4'
            continue
        
        } else if (invertida[i] == 'u') {
            vogais += '5'
            continue
       
        } else if (invertida[i] == '1') {
            vogais += '*'
            continue
        
        } else if (invertida[i] == '2') {
            vogais += '**'
            continue
        
        } else if (invertida[i] == '3') {
            vogais += '***'
            continue
        
        } else if (invertida[i] == '4') {
            vogais += '****'
            continue
       
        } else if (invertida[i] == '5') {
            vogais += '*****'
            continue
        
        } else if (invertida[i] == '6') {
            vogais += '******'
            continue
        
        } else if (invertida[i] == '7') {
            vogais += '*******'
            continue
        
        } else if (invertida[i] == '8') {
            vogais += '********'
            continue
        
        } else if (invertida[i] == '9') {
            vogais += '*********'
            continue
        
        } else if (invertida[i] == '0') {
            vogais += '#'
            continue
        }
        vogais += invertida[i]
    }
    let var1, var2, var3 = ''
    
    for (let i = 0; i < vogais.length; i++) {
        
        if (vogais[i] != '*' && vogais[i] != '1' && vogais[i] != '2' && vogais[i] != '3' && vogais[i] != '4' && vogais[i] != '5' && vogais[i] != '6' && vogais[i] != '7'&& vogais[i] != '8' && vogais[i] != '9' && vogais[i] != '#') {
            
            var3 = vogais.charCodeAt(i)
           
            if (var2 + 10 > 122) {
                var2 = 97 - (123 - var2)
            }
            
            var1 = String.fromCharCode(var2 + 10);
            var2 += var1
            
            continue
        }
        var3 += vogais[i]
    }

    console.log('Invertida:', invertida, '\n')
    console.log('Vogais e numeros trocados:', vogais, '\n')
    console.log('Criptografia final:', var3)
}
main()
/* NÃO CONSIGO FAZER FUNCIONAR*/

const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    const numero = romanize(500)
    console.log(numero)
    }
    
    function romanize(num1) {
        var lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }, romano = '', i;
            
        while (num >= lookup[i]) {
                roman += i;
                num1 -= lookup[i];
            }
            
            return romano
       
        }    
main()
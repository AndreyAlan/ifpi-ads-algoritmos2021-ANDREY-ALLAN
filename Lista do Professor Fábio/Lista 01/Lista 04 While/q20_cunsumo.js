/* não entedi muito bem o racicinio dessa questão*/

const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let distancia, litros
    let reabastecer = 0, distancia_total = 0, litros_total = 0
        
    while(distancia_total < 600){
            
        distancia = Number(prompt('Informe a distância percorrida: '))
            
        litros = Number(prompt('Informe a quantidade de litros que foi consumida durante esse percusso: '))
    
            distancia_total = distancia_total + distancia
            litros_total = litros_total + litros
    
            if(litros_total >= 50){
                
                reabastecer++
                litros = 1
                litros_total = 1
    
            }
    
        }
        
        let consumo_medio = ((reabastecer * 50)+50) / distancia_total
        
        console.log('É dotor você chegou ao seu destino')
        console.log('Infelizmente você tera que reabastecer', reabastecer, 'litros de gasolina, por falta de combustível')
        console.log('Você teve um consumo médio de : ', consumo_medio.toFixed(2))
        
    
    }
    main()
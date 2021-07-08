const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let voto
    let serra = 0, dilma = 0, ciro = 0
    let indeciso = 0, outros = 0, branco = 0, i = 0
   
    while (voto != -1) {
        
        console.log('       URNA ELETRÔNICA       ')
        console.log('Escolha um dos cadidatos para votar             #VOTECERTO')
        voto = Number(prompt('Informe seu voto: '))
        console.log('Seu voto foi computado')
       
        if (voto != -1) {
            if (voto == 45) {
                serra++
            
            } else if (voto == 13) {
                dilma++
            
            } else if (voto == 23) {
                ciro++
            
            } else if (voto == 99) {
                indeciso++
            
            } else if (voto == 98) {
                outros++
            
            } else if (voto == 0) {
                branco++
            }
            i++
        }
    }
    const serra1 = (serra * 100) / i
    const dilma1 = (dilma * 100) / i
    const ciro1 = (ciro * 100) / i
    const indeciso1 = (indeciso * 100) / i
    const outros1 = (outros * 100) / i
    const branco1 = (branco * 100) / i

    console.log('Serra', serra1)
    console.log('Dilma', dilma1)
    console.log('Ciro', ciro1)
    console.log('Indecisão', indeciso1)
    console.log('Outros', outros1)
    console.log('Em branco ou nulo', branco1)

    if (serra1 > 50 && dilma1 > 50 && ciro1 > 50 && indeciso1 > 50 && outros1 > 50 && branco1 > 50) {
        console.log('Ira ocorrer um segundo turno')
    }
}

main()
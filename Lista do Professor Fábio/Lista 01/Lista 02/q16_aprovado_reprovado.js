const prompt = require('prompt-sync')()

function main(){
   
    // Entrada

    const nota1 = Number(prompt('Informe a primeira nota: '))
    const nota2 = Number(prompt('Informe a segunda nota: '))
    
    let media = 0

    // Processamento e saida dos dados recebidos
    
    media = (nota1 + nota2) / 2
    if (media >= 7){
        console.log('Parabéns!!! Você foi aprovado')
    
    }else if(media <= 7){
        
        const nota_final = Number(prompt('Informe a nota da prova final: '))
       
        media = (nota1 + nota2 +nota_final)/3
        
        if(media >= 5){
            console.log('Ufaa, você foi aprovado')
       
        }else{
            console.log('Poxaa :(, você não obteve a nota nescessária')
        }
    }
}
main()
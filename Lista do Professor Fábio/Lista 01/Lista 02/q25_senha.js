const prompt = require('prompt-sync')()

function main(){
   
    // Entrada
    
    const senha = prompt('Insira a senha: ')
    
    //Processamento e saida dos dados recebidos

    if (senha == '1234'){
        console.log('Acesso Permitido')
    }else{
        console.log('Xiiih!!! Acesso Negado')
        console.log('A sua senha está invalida. Por favor tente novamente, dessa vez inserindo os dados corretamente em!')
    }
}
main()
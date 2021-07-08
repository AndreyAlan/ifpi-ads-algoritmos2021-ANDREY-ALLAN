const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let nome, preco, quantidade
    
    while (nome != 'fim') {
        nome = prompt('Informe o nome do produto: ')
       
        if (nome != 'fim') {
            preco = Number(prompt('Informe o preço do produto: '))
            quantidade = Number(prompt('Informe a quantidade: '))

       
            if (quantidade <= 10) {
                console.log('Não possui desconto, compre pelo preço normal a unidade:', preco, 'total:', preco * quantidade)
       
            } else if (quantidade >= 11 <= 20) {
                preco = preco - (preco * 0.1)
                console.log('Este produto possui um desconto de 10% a unidade,  compre agora, não vai querer perdere essa: ', preco, 'total:', preco * quantidade)
       
            } else if (quantidade >= 21 <= 50) {
                preco = preco - (preco * 0.2)
                console.log('Este produto possui um desconto de 20% a unidade, compre agora, não vai querer perdere essa: ', preco, 'total:', preco * quantidade)
       
            } else if (quantidade > 50) {
                preco = preco - (preco * 0.5)
                console.log('Nossa, esse produto possui um desconto de 50% a unidade,  ja adiquire logo seu antes que acabe, essa não da pra ficar de fora', preco, 'total:', preco * quantidade)
            }
        }
    }
}

main()
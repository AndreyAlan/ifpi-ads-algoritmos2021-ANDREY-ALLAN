// Não conseguir fazer ela toda professor

const prompt = require('prompt-sync')()

function main() {
    let a = Number(prompt('digite a ordem da matriz: '));
    let array = criamatriz(a, a);

    let soma = 0
    quantidade = 0
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < a; j++) {
            array[i][j] = Number(prompt(`Array[${i}][${j}] = `));
            soma += array[i][j]
            quantidade++
        }
        
    }
    
    
    console.log(array)
    console.log('--------------------------------------------')
    console.log(`A soma de todos os elementos da matriz é: ${soma}`)
    console.log('--------------------------------------------')
    console.log(`Soma da diagonal principal é: ${soma_diagonal_principal(array)}`)
    console.log('--------------------------------------------')
    console.log(`Soma diagonal secundaria é: ${soma_diagonal_secundaria(array)}`)
    console.log('--------------------------------------------')

    if(media_diagonal_principal(array) > media_diagonal_secundaria){
        console.log('A media da diagonal é maior')
    }else if(media_diagonal_principal(array) < media_diagonal_secundaria(array)){
        console.log('A média da digonal secundária é maior')
    }else{
        console.log('As médias das diagonais são equivalentes')
    }
    
}
const criamatriz = (a, b) => {
    const array = Array(a);
    
    for (let i = 0; i < a; i++){
        array[i] = Array(b);
    }

    return array;
}



const soma_diagonal_principal = (a) => {
    let soma = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (i == j) {
                soma += a[i][j];
            }

        }
        

    }
    return soma; 
    
    
}

const soma_diagonal_secundaria = (b) => {
    let soma = 0;

    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if ((i + j) == (b.length - 1)) {
                soma += b[i][j];
            }
        }
    }
    return soma;
}
const media_diagonal_principal = (a) =>  {
    let soma = 0;
    let quantidade = 0
    let media = 0
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (i == j) {
                soma += a[i][j];
                quantidade++
            }

        }
    }
    media = soma + quantidade
    
    return media   
    
}
const media_diagonal_secundaria = (b) => {
    let soma = 0;
    let quantidade = 0
    let media = 0

    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if ((i + j) == (b.length - 1)) {
                soma += b[i][j];
                quantidade++
            }
        }
    }
    media = soma/quantidade
    return media;
}
main()
// =========
// Essencial
// =========

// Escreva uma função que receba um nome e retorne uma saudação para este nome: Tiago -> Olá, Tiago
function saudar(nome) { 
    return "Olá, " + nome;
}

// Escreva uma função que receba um nome completo e retorna apenas o primeiro nome: Tiago Lage Payne de Pádua -> Tiago
function extrairPrimeiroNome(nomecompleto) {
    retiraNome = nomecompleto.split(" ");
    return retiraNome[0]; 
}

// Escreva uma função que receba uma palavra e torna a primeira letra maiúscula e as outras minúsculas: tIaGo -> Tiago
function capitalizar(palavra){
    palavra = palavra.toLowerCase();
    palavra = palavra [0].toUpperCase() + palavra.slice(1);
    return palavra;
}

// Escreva uma função que recebe um preço original e uma categoria de produto e calcula o valor do imposto. Produtos da categoria Alimentação são isentos. Outros produtos tem um imposto de 10%.
// (30, Alimentação) => 0
// (10, Bebida) => 1
function calculaImposto(precoOriginal, categoria) {
    if (categoria === "Alimentação"){
        return 0;
    }
    if (categoria === "Bebida"){
        return precoOriginal*0.10;
    }
}

// Escreva uma função que recebe um preço original, uma categoria de produto e um cupom de desconto e calcula o preço com desconto. Se a categoria for Alimentação e o cupom for NULABSSA, deve ser feito um desconto de 50%. Caso contrário, não há nenhum desconto.
// (30, Alimentação, NULABSSA) => 15
// (10, Bebida, NULABSSA) => 10
// (30, Alimentação, XPTO) => 30
// (10, Bebida, XPTO) => 10
function calculaDesconto(preco, categProduto, cupomDeDesconto) {
    let valorFinal;
    if (categProduto === "Alimentação" & cupomDeDesconto === "NULABSSA"){
        valorFinal = preco - (preco*0.50);
        return valorFinal;
    }
    else valorFinal = preco;
    return valorFinal; 
}

// =========
// Desejável
// =========

// Escreva uma função que receba uma palavra como primeiro argumento, um comprimento máximo como segundo argumento e trunca a palavra se ela for maior que o comprimento máximo.
// o valor default do comprimento máximo deve ser 5:
// (teste, 10) -> teste
// (fulano, 4) -> fula...
function truncar(palavra, comprimentoMax=5) {
    let novaPalavra;
   if (palavra.length > comprimentoMax){
        novaPalavra = palavra.substr(0,comprimentoMax) + "...";
        return novaPalavra;
    }
    else return palavra;
}

// Escreva uma função que valida se o texto informado está preenchido e retorna o texto sem espaços antes ou depois.
// "" -> undefined
// "   " -> undefined
// "      Maria " -> "Maria"
function validaTextoPreenchido(texto) {
    if (texto.trim()) {
        return texto.trim();
    }
    else {
        return undefined;
    }
}

// =======
// Desafio
// =======

// Escreva uma função que valida se a string passada é uma data de nascimento válida, deve retornar um objeto Date sea data for válida ou NaN caso seja inválida.
// 01/01/2000 -> Ok
// 99/99/9999 -> NaN
function validaData(data) {
    let ano = data[6] + data[7] + data[8] + data[9];
    let mes = data[3] + data[4];
    let dia = data[0] + data[1];
    if (new Date(mes + '/' + dia + '/' + ano) === NaN || dia > '31' || mes > '12'){
        return NaN;
    }
    else {
        return ('Ok');
    }
}

module.exports = { saudar, extrairPrimeiroNome, capitalizar, calculaImposto, calculaDesconto, truncar, validaTextoPreenchido, validaData };
        //TIPO: NUMBER//

const meuNumero = 7; 

const primeiroNumero = 3; 
const segundoNumero = 5; 

const terceiroNumero = .8; 
//No JS, quando eu tenho um número decimal (float) que começa com 0, eu posso colocar um ponto no lugar
//Ex.: 
// 0.5 => .5 || 0.2637 => .2637


const operacaoMatematica = primeiroNumero + segundoNumero;
const divisaoDecimais = terceiroNumero/primeiroNumero; 

console.log(operacaoMatematica);
console.log(divisaoDecimais.toFixed(2));
//Ao usar o ".toFixed", eu limito o resultado para duas casas decimais


        //TIPO: STRING//

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#m%C3%A9todos

const texto1 = "Olá, mundo!"; 
const texto2 = 'Olá, mundo!'; 

const exemploSenha = "ExemploSenha189@"; 
const citacao = "Camões disse uma vez: 'paixão é fogo que arde sem se ver!'"; 

console.log(citacao);

//Usando o padrão UTF
//https://en.wikipedia.org/wiki/List_of_Unicode_characters

const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const tique = '\u2705';
const hiragana = '\u3041';

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);

//Letras maiúsculas e minúsculas
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

const cidade = "belo horizonte";
const nomeCidade = "Belo Horizonte";

const nomeCidadeMinusculo = nomeCidade.toLowerCase();
const cidadeMaiúscula = cidade.toUpperCase(); 


console.log(nomeCidadeMinusculo); 
console.log(cidadeMaiúscula);
console.log(cidade === nomeCidadeMinusculo); // true

//Descobrindo o tamaho de um texto
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length

const tamanhoDoTexto = "Qual será o tamanho dessa frase?"; 
console.log(tamanhoDoTexto.length); // 32 caracteres


                //TIPO: BOOLEAN//

const num1 = 4; 
const num2 = 9; 
const num3 = 9; 

console.log(num1 === num2); //false
console.log(num3 === num2); //true

                //TIPO NULL E UNDEFINED

let input = null;
let input2;
                
console.log(input); // null
console.log(input2); // undefined
  
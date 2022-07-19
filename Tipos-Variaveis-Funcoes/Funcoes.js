// Declarando a função
    // function "nomeFunção" ( parametros que ela deve receber)
    // { trecho de código descrevendo o que a função irá realizar com os parametros recebidos}

function apresentacao(texto){
    console.log(texto); 
}

//Executando a função
    // nomeFunção(parametro que eu vou passar)

apresentacao("Essa é a apresentação da Function :) "); 
apresentacao("Testando a mesma função, com outro texto ;)"); 

//Função sem parâmetro
function segundaApresentacao(){
    return "Retornando uma função sem parâmetros";
}

console.log(segundaApresentacao());

//Chamando uma função, com outra função 
apresentacao(segundaApresentacao()); 

            //FUNÇÕES PRONTAS DO JS

//Um dos exemplos é a função Math(), que possui diversos exemplos
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math#description

Math.round()
    //Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.
        Math.round(4.3);//retorna 4
        Math.round(3.85); //retorna 4
        Math.round(2.5); //retorna 3, quando o número termina com 0.5 a função arredonda para cima

Math.ceil()
    //Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).
        Math.ceil(5.2); //retorna 6

Math.trunc()
    //Desconsidera os números decimais, o que é conhecido como truncamento.
        Math.trunc(4.3); //retorna 4
        Math.trunc(4.8); //retorna 4


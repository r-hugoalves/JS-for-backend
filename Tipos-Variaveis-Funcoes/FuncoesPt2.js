//Definindo mais de um parametro para a função

function soma(num1, num2){
    return num1 + num2; 
}

console.log(soma(45, 78)); 

//Usando uma Sring como parametro, e a ordem deles

function apresentacao(nome, idade){
    return `Meu nome é ${nome}, e tenho ${idade} anos de idade. `; 
}
console.log(apresentacao("Bilbo Bolseiro", 50)); 

//Passando outra função como parâmetro

function multiplicacao(numero1, numero2){
    return numero1 * numero2; 
}

console.log(multiplicacao(soma(2,3), soma(4,5)));  


            //Expressão de função 

//A declaração da função é anônima, quem recebe o nome é a variável

    //Isso tem uma implicancia, e que é a principal diferença entre a expressão de função e a declaração de função
        //Como ela se comporta como uma variável, eu só posso chama-la, depois que ela já tiver sido inicializada! 
        
const soma = function (valor1, valor2) { return valor1 + valor2}; 
console.log(soma(3,7)); 
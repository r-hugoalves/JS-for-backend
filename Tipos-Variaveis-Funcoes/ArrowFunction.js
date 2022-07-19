//Declaração da função 

function apresentarNome(nome){
    return `Meu nome é: ${nome}`; 
}
console.log(apresentarNome("Sauron!"))

//Usando a arrow function

const apresentarNomeArrow = nome => `Meu nome é: ${nome}`;
console.log(apresentarNomeArrow("Gandalf"))

//Usando a arrow function com mais de um parametro 

const somarNumeros = (num1, num2) => num1 + num2; 
console.log(somarNumeros(2,9)); 

//Usando a arrow function com mais de uma linha de instrução 

const somarNumerosPequenos = (numero1, numero2) => {
    if(numero1 > 10 || numero2 > 10){
        return "Somente números de 1 a 9! "; 
    } else{
        return numero1 + numero2; 
    }
}
console.log(somarNumerosPequenos(2,12)); //primeira condição
console.log(somarNumerosPequenos(2,7));
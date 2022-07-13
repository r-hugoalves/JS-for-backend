const idadeMinima = 18; 
const idadeCliente = 16; 

if(idadeCliente >= idadeMinima){
    console.log("Pode beber cerveja :)")
} else{
    console.log("Vai ficar apenas no suco...")
}

//Essa é a forma padrão de se comparar. Porém, no JS é possível fazer por meio de um operador ternário, conforme abaixo:

console.log(idadeCliente >= idadeMinima ? "Pode beber cerveja :)" : "Vai ficar apenas no suco..." )
//estrutura.: condição ? resultado da condição positiva : resultado da condição negativa 

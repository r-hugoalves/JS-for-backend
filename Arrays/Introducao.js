//Calcular a média das notas: 7,5; 8; 9; 8,5

let nota1 = 7.5; 
let nota2 = 8; 
let nota3 = 9; 
let nota4 = 8.5; 

let somaDasNotas = (nota1 + nota2 + nota3 + nota4); 
let mediaDasNotas = somaDasNotas/4; 

console.log(mediaDasNotas); 

//Usando um array 

const notas = [7.5, 8, 9, 8.5];
let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length; 

console.log(media); 

//Adicionando um elemento 

const notasDoAluno = [10, 6, 8]; 
notasDoAluno.push(7); 

let mediaDoAluno =
(notasDoAluno[0] + notasDoAluno[1] + notasDoAluno[2] + notasDoAluno[3])/notasDoAluno.length; 

console.log(mediaDoAluno); 

//Removendo um elemento 

notasDoAluno.pop(); 
notasDoAluno.push(9.5); 

console.log(notasDoAluno); 
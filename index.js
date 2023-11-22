let nome, cidade;

console.log(typeof nome); 
console.log(typeof cidade); 

nome = prompt("Qual é o seu nome?");
cidade = prompt("Em qual cidade você mora?");

console.log(typeof nome); 
console.log(typeof cidade); 

console.log(`Olá, meu nome é ${nome} e eu moro em ${cidade}.`);

//

let perguntaUm = prompt('Você gosta de pizza?')
console.log('Você gosta de pizza?', perguntaUm)

let perguntaDois = prompt('Você gosta de pizza?')
console.log('Você pinta as unhas?', perguntaDois)

let perguntaTres = prompt('Você gosta de pizza?')
console.log('Você gosta de filmes de ação?', perguntaTres)
//

let x = 5;
let y = 10;

console.log("Valores iniciais: x =", x, "e y =", y);

let temp = x;
x = y;
y = temp;

console.log("Novos valores: x =", x, "e y =", y);

let numero1 = parseFloat(prompt("Insira o primeiro número:"));
let numero2 = parseFloat(prompt("Insira o segundo número:"));

let soma = numero1 + numero2;
let multiplicacao = numero1 * numero2;

console.log("A soma dos números é:", soma);
console.log("A multiplicação dos números é:", multiplicacao);



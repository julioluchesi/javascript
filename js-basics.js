//created in NOV 2017

//**********************************************************************//
//  			 VARIABLES AND DATA TYPES / VARIÁVEIS E TIPO DE DADOS         //
//**********************************************************************//

var name = 'Julio'; //string
var lastName = 'Coelho'; //string variable with camelcase
var age = 26; //number
var fullAge = true; //boolean

var name = 'Julio';
var age = '36';
//console.log(name + age); //Javascript Type Coercion - transforma a idade em string automaticamente
//console.log(age + age); //Para esse caso não ocorre o Type Coercion

var job, isMarried;
//console.log(job); //returns undefined

job = 'teacher'; //Não é necessario usar "var" novamente, apenas quando declara a variável a 1a. vez
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.'); // concatenation - type coercion novamente com "age" e "isMarried"

age = 'thirty six'; //variable mutation
job= 'driver'; //variable mutation

// concatenation - type coercion novamente com "age" e "isMarried"
console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.'); 

// PROMPT is a method that get a data from the console
var lastName = prompt('What is the last name?'); 

//Similar to prompt but just pop ups a window message.
alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.')

//**********************************************************************//
//       	          		 OPERATORS / OPERADORES                         //
//**********************************************************************//

// Regra de precedência dos operadores (What is Parsed first? O que é analisado primeiro?): 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

var now = 2017;
var birthYear = now - 26;
birthYear = now - 26 * 2; // 2016 - 52 // 1964
console.log(birthYear);

var ageJulio = 30;
var ageTomas = 30;

ageJulio = ageTomas = (3 + 5) * 4 - 6; 
//Regra de precedência: parenteses, multiplicacao, subtração e igual(da direita pra esquerda)
//ageJulio = ageTomas = 26
//ageJulio = 26

ageJulio++; //same at ageJulio = ageJulio + 1;
ageTomas *= 2; //same at ageTomas = ageTomas * 2;

console.log(ageJulio);
console.log(ageTomas);

//**********************************************************************//
//       	          		 IF/ELSE (condicionais)                         //
//**********************************************************************//



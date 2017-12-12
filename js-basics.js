//created in NOV 2017

//**********************************************************************//
//          VARIABLES AND DATA TYPES / VARIÁVEIS E TIPO DE DADOS        //
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
//               OPERATORS / OPERADORES                                 //
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
//                      IF/ELSE (statements)                            //
//**********************************************************************//

var name = 'Julio';
var age = 36;
var isMarried = 'yes';

if (isMarried === 'yes')
	{
	console.log(name + ' is married!');
	} 
else 
	{
	console.log(name + ' is not married!');
	}

isMarried = false;

//Não é necessário inserir comparações no IF. Por padrão o IF executa algo que seja "true" e o ELSE algo que seja "false"
if(isMarried) {
 	console.log('yes');
} else {
	console.log('no');
}

/* ===== */

if (23 == "23") {
	console.log('verdade') //com "==" o javascript faz type coercion
}

if (23 === "23") {
	console.log('verdade') //com "===" o javascript não faz type coercion 
}

//**********************************************************************//
//	    					        FUNCTIONS (funções)			              	    	//
//**********************************************************************//

//DRY principles: Princípio DRY: Don't Repeat Yourself (https://en.wikipedia.org/wiki/Don't_repeat_yourself)
//Function with return

function calculateAge(birthYear) {
	var age = 2017 - birthYear;
	return age;
}

//Persons
var ageJulio = calculateAge(1981);
console.log(ageJulio);

var ageTomas = calculateAge(1985);
console.log(ageTomas);

var ageSally = calculateAge(1987);
console.log(ageSally);

// Function that not returns anything but then console log
function yearsUntilRetirement(name, year) {
	var age = calculateAge(year);
	retirement = 65 - age;

	if(retirement >= 0) {
		console.log(name + ' retires in ' + retirement + ' years.');	
	} else {
		console.log('The' + name + ' is already retired!')
	}
}
yearsUntilRetirement('Julio', 1981);
yearsUntilRetirement('Tomas', 1976);
yearsUntilRetirement('Sally', 1940);

//STATEMENTS x EXPRESSIONS diferences

//Statements (declaração) Não produzem/guardam valor/retorno nenhum: exemplos:
function someFunction(par){
		//code
}
if (x === 5) {
	//do something
}

//Expressions (expressões) - Produzem/guardam valor/retorno: exemplos:
var someFunction = function(par){
	//code
}
3 + 4;
var x = 3;

//**********************************************************************//
//	        					              ARRAYS                         			//
//**********************************************************************//

var names = ['Julio', 'Tomas', 'Sally', 'Andreas'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);

names[1] = 'Joshua'; //Troca o valor do array "names" na posição 1.
console.log(names);

var Julio = ['Julio', 'Coelho', 1981, 'Frontend Designer', false];

Julio.push('blue'); //Insere elemento no fim do array
Julio.unshift('Mr.'); //Insere elemento no começo do array
Julio.pop(); //Remove elemento começando pelo final
Julio.shift(); //Remove elemento começando pelo inicio
console.log(Julio);

//Retorna 1. Normalmente indexOf é usado para saber se o elemento existe ou não no array.
alert(Julio.indexOf('Coelho'));

//Statement para saber se Julio é frontend ou não
if (Julio.indexOf('Frontend Designer') === -1) {
	console.log('Julio is not a Frontend');
} else {
	console.log('Julio is a Frontend');
}

//**********************************************************************//
//						                	OBJECTS 						                  	//
//**********************************************************************//

//Object literal (par CHAVE(KEY)/VALOR(VALUE))
var Julio = {
	name: 'Julio',
	lastName: 'Coelho',
	yearOfBirth: 1981,
	job: 'Frontend',
	isMarried: true
}

console.log(Julio); // retorna o objeto todo

//Maneiras de chamar os valores do objeto:
console.log(Julio.lastName); //1 - retorna o lastName do objeto
console.log(Julio['lastName']);//2 - usando chaves e o valor entre aspas
var xyz = 'job';//3 - Usando uma variavel que tem o nome da chave como valor.
console.log(Julio[xyz]); 

//Data mutation para objetos
Julio.lastName = 'Luchesi';
Julio['job'] = 'webdeveloper';
console.log(Julio);

//Criando um objeto e atribuindo chave/valor de uma outra maneira:
var Sally = new Object();
Sally.name = 'Sally';
Sally.lastName = 'Gost';
Sally['yearOfBirth'] = 1983;
Sally['job'] = 'retired';
Sally['isMarried'] = true;
console.log(Sally);

//**********************************************************************//
//			         	      		Objects and methods	  		              		//
//**********************************************************************//

/*=== V02 ===*/

var Julio = {
	name: 'Julio',
	lastName: 'Coelho',
	yearOfBirth: 1981,
	job: 'Frontend',
	isMarried: true,
	family: ['Karla', 'Rafa', 'Mari'],
	//calculateAge: function(yearOfBirth){ //function expression (not statement)
	//	return 2017 - yearOfBirth;
	//}
	calculateAge: function(){ //function expression (not statement)
		return 2017 - this.yearOfBirth; //Julio.yearOfBirth
	}
}

//treinando o data retrievement
console.log(Julio);//retorna o objeto todo
console.log(Julio.family);//retorna o array do objeto
console.log(Julio.family[2]);//retorna o valor do array na posição 3
//console.log(Julio.calculateAge(1981)); //Call function - chamada do método (função) calculateAge
console.log(Julio.calculateAge())

//calcular a idade e inserir no objeto por dot notation e por chaves
var age = Julio.calculateAge();
//Julio.age = age;
Julio['age'] = age; */

/*=== V02 ===*/

var Julio = {
	name: 'Julio',
	lastName: 'Coelho',
	yearOfBirth: 1981,
	job: 'Frontend',
	isMarried: true,
	family: ['Karla', 'Rafa', 'Mari'],
	calculateAge: function(){
		this.age = 2017 - this.yearOfBirth;
	}
}

Julio.calculateAge();
console.log(Julio);


//**********************************************************************//
//	              		  			LOOPS & ITERATION                					//
//**********************************************************************//

//control structure: loop
for(var i = 0; i<10; i++  ) { //for (START / CONDITION TO END / UPTADE COUNTER)
 console.log(i);
} 

var names = ['Mari', 'Karla', 'Rafa', 'Julio', 'Celia'];

//FOR LOOP
for(var i = 0; i < names.length ; i++){ //exibe os valores do array de 1 a 5
	console.log(names[i]);
}

for(var i = names.length - 1; i >= 0 ; i--){ // exibe os valores do array de 5 a 1
	console.log(names[i]);
} 

//WHILE LOOP
var i = 0;
while (i < names.length) {
	console.log(names[i]);
	i++;
}

//BREAK statement -- pára no 3
for (i = 0; i <= 5; i++) {
	console.log(i);
	if(i===3){
		break;
	}
}
//CONTINUE statement -- não mostra o 3
for (i = 0; i <= 5; i++) {
	if(i===3){
		continue;
	}
	console.log(i);
}



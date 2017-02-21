// Criando os objetos / propriedades e valores.
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

// Criando array e inserindo os objetos nele.
var contacts = [bob, mary];

// Função para exibir nome e sobrenome de cada objeto.
function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

// Função que lista todos os contatos que estão no array e utiliza um FOR com uma função printPerson pra exibir isso.
function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

//Função que localiza no objeto um valor (ex: sobrenome). 
//O parâmetro usado é o lastName. Ele deve ser passado quando a função for chamada
var search = function(lastName){
    var contactsLength = contacts.length;
    for(i=0 ; i<contactsLength ; i++){
        if(contacts[i].lastName === lastName){
            printPerson(contacts[i]);
        };
    };
};

// Função para adicionar novos amigos (objetos) no array.
function add(firstName, lastName, phoneNumber, email){
    contacts[contacts.length] = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email
    };
};

//Chamando a função ADD para criar um novo objeto e passando os parâmetros necessários.
add("Julio","Coelho","(31)3344-9988","julio-cesar@teste.com");

// Chamando a função list para exibir TODOS os objetos.
list();

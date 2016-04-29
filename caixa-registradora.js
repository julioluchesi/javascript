// =================================================================================
//
// Script adicionado em 28/04/2016 por Julio Cesar Luchesi Coelho. Código construído no CODECADEMY (www.codecademy.com)
// durante o curso de JavaScript, Módulo CRIANDO UMA CAIXA REGISTRADORA, tópico "BIP BIP".
//
// VERSÃO desse script: 0.1
//
// DESCRIÇÃO:
// Essa é uma caixa registradora que trabalha com Classes, métodos, funcões e propriedades. Ao chamar o metodo "cashRegister.scan"
// com os dois atributos (nome do item e quantidade), ele faz a soma e adiciona ao total. Depois exibe o total.
//
// Há também o metodo "cashRegister.voidLastTransaction" que cancela o valor da última transação.
//
// =================================================================================

// Definindo função construtora "StaffMember" que recebe dois parâmetros: "name" e "discountPercent". Essas são as propriedades que o objeto criado com esse construtor vai ter.
function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

// Criando os objetos (funcionários) utilizando o construtor "StaffMember" acima.
var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);
var me = new StaffMember("Julio",20);


// Cria objeto
var cashRegister = {
    
    // Iniciando a propriedade "total"
    total:0,
    // Iniciando a propriedade "lastTransactionAmount"
    lastTransactionAmount: 0,

    //Definindo propriedade "add" que recebe um atributo "itemCost" e/ou 0, e soma ao total. Depois grava esse atributo na propriedade "lastTransactionAmount". A propriedade "lastTransactionAmount" guarda o valor da última transação, caso seja necessário desfazer essa transação por motivo de erro de quem a fez por exemplo.
    add: function(itemCost) {
        this.total +=  (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    
    //Definindo o metodo "scan" que recebe 2 atributos "item" e "quantity". O primeiro atributo carrega o nome do produto e o segundo a quantidade desse produto.
    scan: function(item,quantity) {

        // Definindo a expressão seletora SWITCH que trata o atributo 1 do metodo "scan". O segundo atributo "quantity" é utilizado dentro dos cases.
        switch (item) {
            case "ovos": this.add(0.98 * quantity); break;
            case "leite": this.add(1.23 * quantity); break;
            case "revista": this.add(4.99 * quantity); break;
            case "chocolate": this.add(0.45 * quantity); break;
        }
            // Não é necessário criar um default para esse switch, então terminamos o switch com um retorno true apenas.
            return true;
    },

    //Definindo metodo "voidLastTransaction" para desfazer a última transação. Ele apenas subtrai do o valor da última transação e atribui o novo valor que a propriedade "lastTransactionAMount" carrega a esse total (-=). Depois na segunda linha zeramos a propriedade "las"
     voidLastTransaction: function() {
        return this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    }
    
    // Definindo metodo "applyStaffDiscount" que recebe um parâmetro "employee" e usa ele para calcular o total menos o percentual de desconto desse "employee" na segunda linha. 
    applyStaffDiscount: function(employee){
        this.employee = employee;
        this.total -= this.total * (employee.discountPercent / 100);
    }
};

// Chamando os métodos para fazer a conta.
cashRegister.scan('ovos',1);
cashRegister.scan('leite',1);
cashRegister.scan('revista',1);
cashRegister.scan('chocolate',4);

//Anulando a ultima transacao com o método "voidLastTransaction"
cashRegister.voidLastTransaction();

//Somando um novo valor aleatório com o método "scan".
cashRegister.scan('chocolate', 3);

//Aplicando o desconto ao empregado (no caso abaixo o desconto é dado ao empregado "me")
cashRegister.applyStaffDiscount(me);

//Mostra o total da conta e usa "toFixed" para manter em duas casas decimais o resultado.
console.log('Sua conta é '+cashRegister.total.toFixed(2));

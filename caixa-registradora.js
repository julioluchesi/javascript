// =================================================================================
//
// Script adicionado em 28/04/2016 por Julio Cesar Luchesi Coelho. Código construído no CODECADEMY (www.codecademy.com)
// durante o curso de JavaScript, Módulo CRIANDO UMA CAIXA REGISTRADORA, tópico "BIP BIP".
//
// VERSÃO desse script: 0.1
//
// DESCRIÇÃO:
// Essa é uma caixa registradora que trabalha com Classes, métodos, funcões e propriedades. Ao chamar o método "cashRegister.scan"
// com os dois atributos (nome do item e quantidade), ele faz a soma e adiciona ao total. Depois exibe o total.
//
// Há também o método "cashRegister.voidLastTransaction" que cancela o valor da última transação.
//
// =================================================================================



// Cria objeto
var cashRegister = {
    
    //Propriedade total
    total:0,
    
    //Definindo propriedade "add" que recebe um atributo "itemCost" e soma ao total. Depois grava esse atributo na propriedade "lastTransactionAmount"
    add: function(itemCost) {
        this.total +=  itemCost;
        this.lastTransactionAmount = itemCost;
    },
    
    //Definindo a propriedade "lastTransactionAmount" e igualando a ela mesma.
    lastTransactionAmount: this.lastTransactionAmount,

    //Definindo o método "scan" que recebe 2 atributos.
    scan: function(item,quantity) {

        // Definindo a expressão seletora SWITCH que trata o atributo 1 do método "scan". O segundo atributo "quantity" é utilizado dentro dos cases.
        switch (item) {
            case "ovos": this.add(0.98 * quantity); break;
            case "leite": this.add(1.23 * quantity); break;
            case "revista": this.add(4.99 * quantity); break;
            case "chocolate": this.add(0.45 * quantity); break;
        }
            return true;
    },

    //Definindo método "voidLastTransaction" para desfazer a última transação. Ele apenas tira do o valor da última transação e atribui o novo valor a esse total (-=).
     voidLastTransaction: function() {
        return this.total -= this.lastTransactionAmount;
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

//Mostra o total da conta
console.log('Your bill is '+cashRegister.total);
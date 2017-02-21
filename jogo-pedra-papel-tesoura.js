// 21/02/2017 - Versão diferente do jogo - Pedra, Papel, Tesoura - criado durante os estudos no curso de Javascript do Codecademy.
// Esta versão do jogo contém o filtro para que o jogador não digite nada que seja diferente de PEDRA PAPEL ou TESOURA.
// Se o jogador digitar algo diferente, o jogo orienta sobre o procedimento correto.

// Próxima versão: O resultado do jogo indicará especificamente se o jogador ou o computador ganhou. 

//Declarando variáveis
  // Variável usuário
  var userChoice = prompt("Voce escolhe pedra, papel ou tesoura?").toLowerCase();
  // Variável Computador
  var computerChoice = Math.random();

// Atribuindo um nome (string) à variável (number) eleita pelo computador
  if (computerChoice < 0.34) {
    computerChoice = "pedra";
  } else if(computerChoice <= 0.67) {
    computerChoice = "papel";
  } else {
    computerChoice = "tesoura";
  };

//Checando os dados do usuario e da máquina (a função checaDados é definida mais abaixo)
  checaDados(userChoice);

// FUNÇÕES //

//função para checar e informar os dados do usuário
  var checaDados = function(dados){
    if(dados === "pedra" || dados === "tesoura" || dados === "papel"){
        console.log("O computador escolheu:" + " " + computerChoice);
        console.log("Você escolheu:" + " " + userChoice);
        //chamando função COMPARE que será criada mais abaixo.
        compare();
    } else {
        userChoice = prompt("Atenção, digite apenas uma das três opções: pedra, papel ou tesoura.").toLowerCase();
        checaDados(userChoice);
    };
};

// Função que compara a escolha do computador e a escolha do jogador e define um vencedor.
var compare = function(choice1, choice2){
                    
    // Se o resultado for EMPATE
    if(choice1 === choice2){
        return("O resultado é um empate!");
    } 
        // Se choice1 for PEDRA
        else if(choice1 === "pedra") {
            if (choice2 === "tesoura"){
                return("Pedra vence!");
            } else {
                return("Papel vence!");
            };
        }
        
        // Se choice1 for PAPEL
        else if(choice1 === "papel") { 
            if (choice2 === "pedra"){
                return("Papel vence!");
            } else {
                return("Tesoura vence!");
            };
        }
        
     // Se choice1 for TESOURA
      else if(choice1 === "tesoura") {
        if (choice2 === "pedra"){
            return("Pedra vence!");
        } else {
            return("Tesoura vence!");
            };
        }
     };

// Chamando a função de comparação e definindo como parâmetros as escolhas do jogador e do computador
  compare(userChoice,computerChoice);


// Jogo criado durante o aprendizado de Javascript no CODECADEMY (www.codecademy.com).
// Versão 0.1

// DESCRIÇÂO DO JOGO: 
// Neste jogo eu ataco o dragão e o dragão revida. Dependendo do valor do golpe o dragão perde ou eu perco.

// FUNCIONAMENTO DO CÓDIGO:
// O motor do jogo tem base em números aleatórios gerados por Math.random(). Designa-se um número aleatório
// para saber se eu dou ou não o golpe de 0 a 1 - false ou true - (youHit) e um número aleatório para saber 
// o valor esse golpe de 1 a 5 (damageThisRound).
// Depois de termos essas informações, faremos o filtro com IF/ELSE dentro de um WHILE até sabermos qual o resulto do jogo.

// MELHORIAS PARA A PRÓXIMA VERSÃO:
// O problema desse jogo é que o dragão tem uma chance grande de vencer já que a vitória dele está ligada apenas
// à variável youHit que é 0 ou 1 enquanto para que o dragão seja morto é preciso que o youHit seja 1 e que a variável
// damageThisRound some 4 ou mais. Para que a luta fique mais interessante talvez seja válido que à cada novo golpe, 
// as suas chances aumentem já que o dragão vai ficando machucado.


// declarar variáveis
var slaying = true;
var youHit = Math.floor(Math.random() *2);
var damageThisRound = Math.floor(Math.random() *5 + 1);
var totalDamage = 0;

// laço while enquanto o slaying (lutando, matando) for true. Como a variável "slaying" começa com true, ele sempre entra
// no laço WHILE
while(slaying){

    // Vamos dar caminhos diferentes baseado no que acontecer com as porradas que dou no dragão (youHit)
    if (youHit){
        
        console.log("Você acertou o dragão e causou um dano de " + damageThisRound);
        
        // Soma ao totalDamage o valor dado ao damageThisRound
        totalDamage += damageThisRound
        
        // após somar o damageTHisRound ao totalDamage, vamos ver se você matou o dragão ou não. Se o total for 
        // maior ou igual a quatro, sim, senão, a luta continua....
        if(totalDamage >= 4){
            
            console.log("Parabéns, você matou o dragão!!");
            slaying = false;
            
        }
    // A luta continua... então o dragão bate em você e a variável youHit recebe novo valor 0 ou 1...
    } else {
        console.log("O dragão bateu em você!!");
        youHit = Math.floor(Math.random() *2);
    }
    
    //Como a luta acaba, independente do resultado, é preciso mudar o slaying (lutando) para false.    
    slaying = false;
}

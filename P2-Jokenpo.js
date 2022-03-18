console.clear()

const prompt = require('prompt-sync')();

// Inicio do jogo


let start = prompt("Começar o Jogo? Dugite: sim ou nao: ").toLowerCase();

while (start != "sim" && start != "nao") {
    console.log(`\nComando invalido. Digite apenas sim ou nao.\n`);
    start = prompt("Começar o Jogo? Dugite: sim ou nao: ").toLowerCase();
}   

if (start == "nao") {
    
    console.log(`\nFim do Jogo!\n`);
    
    process.exit(1);

}else{
    console.log('\n\nJO..KEN...PÔ!!!\n\n');
    
}

// Variaveis contador de Vitorias, Derrotas e Empates
let vitoria = 0;
let derrota = 0;
let empate = 0;

// Bloco geral do jogo, loop para enquanto a variável start == sim

while (start == "sim") {

// Variável para saber o número de partidas que o usuário deseja jogar
let npartidas = +prompt(`\nQuantas partidas gostaria de jogar?   \n`);
    while (npartidas <= 0) {
        console.log(`\nComando invalido. Digite um número de partidas maior que 0.\n`);
        npartidas = prompt(`Quantas partidas gostaria de jogar?\n`).toLowerCase();
    
        
    }
const jogada = ["Pedra", "Papel", "Tesoura"] ;

let jogador 
let computador

// Bloco de Execução do Jogo
for (let i = 0; i < npartidas; i++) {

    // Jogada do Usuario

    let jokenpo = prompt(`\n\nPedra, Papel ou Tesoura?  \n\n`).toLowerCase();

    //Loop para validação da resposta do usuário, impedindo respostas diferentes das predefinidas.
    while (jokenpo != "pedra" && jokenpo != "papel" && jokenpo != "tesoura") {

        console.log(`\nComando invalido. Digite apenas pedra, papel ou tesoura.\n`);
        jokenpo = prompt("Pedra, Papel ou Tesoura?   ").toLowerCase();

    }   
    // Condicional que Informa a opção escolhida pelo Usuário e designa a string para a variavel jogador.
    if (jokenpo == "pedra") {
        jogador = "pedra";
        console.log(`Você escolheu ${jogada[0]}`);           
    }else if (jokenpo == "papel") {
        jogador = "papel";
        console.log(`Você escolheu ${jogada[1]}`) ;        
    } else {
        jogador = "tesoura";
        console.log(`Você escolheu ${jogada[2]}`) ;        
    }

    // Jogada do computador        
    let numeroRandom = Math.floor(Math.random() * 3);

    // Condicional que Informa a opção sorteada pelo Computador e designa a string para a variavel computador.
    if (numeroRandom == 0) {
        computador = "pedra";
        console.log(`Seu adversário escolheu ${jogada[0]}`);         
    }else if (numeroRandom == 1) {
        computador = "papel";
        console.log(`Seu adversário escolheu ${jogada[1]}`);         
    } else {
        computador = "tesoura";
        console.log(`Seu adversário escolheu ${jogada[2]}`);         
    }

  // Resultado da Partida, adiciona a potuação do resultado para vitoria, derrota ou empate e Lê para o usuario o resultado. 
  if ( (jogador=="pedra" && computador=="tesoura") || (jogador=="papel" && computador=="pedra") || (jogador=="tesoura" && computador=="papel")) {
    vitoria++
    
    console.log(`\nVocê Venceu!!!\n`);
    
  } else if (jogador==computador) {
    empate++
    
    console.log(`\nEmpate!!!\n`);
   
      
  } else {
    derrota++
    
    console.log(`\nVocê Perdeu!!!\n`);
    
  }

     
}
// Resultado da Rodada, informa os resultados cumulativos(caso continue a jogar) das rodadas.
console.log(`Numero de Vitórias: ${vitoria}`);
console.log(`Numero de Empates: ${empate}`);
console.log(`Numero de Derrotas: ${derrota}\n\n`);

// Condicional que informa ao Jogador o resultado final da rodada.  
if (vitoria>derrota) {

    console.log(`\nSua pontuação foi ${vitoria}, Você Venceu!!!\n\n`);

}else if (vitoria==derrota){

    console.log(`\nSua pontuação foi ${vitoria}, Igual a pontuação do seu adversário ${derrota}, Você Empatou!!!\n\n`);

} else {

    console.log(`\nSua pontuação foi ${vitoria}, Menor que a pontuação do seu adversário ${derrota}, Você Perdeu!!!\n\n`);

}

// Variável para saber se o Jogador gostaria de continuar o jogo.
 start = prompt("Gostaria de jogar novamente? Digite sim ou nao:   ");

while (start != "sim" && start != "nao") {

    console.log(`\nComando invalido. Digite apenas sim ou nao.\n`);
    start = prompt("Gostaria de jogar novamente?  ");
    
}   

if (start == "nao") {
    
    console.log(`\nFim do Jogo!!!\n`);
    
    process.exit(1);

}else{

    console.log('\n\nJOKENPÔ\n\n');
    
}

}
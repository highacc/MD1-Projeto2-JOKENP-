console.clear()

const prompt = require('prompt-sync')();

// Inicio do jogo


let start = prompt("Começar o Jogo? Dugite: sim ou nao: ").toLowerCase()
while (start != "sim" && start != "nao") {
    console.log(`\nComando invalido. Digite apenas sim ou nao.\n`);
    start = prompt("Começar o Jogo? Dugite: sim ou nao: ").toLowerCase();
}   

if (start == "nao") {
    console.log()
    console.log("Fim do Jogo!");
    console.log()
    process.exit(1);
}else{
    console.log('\n\nJOKENPÔ\n\n')
    console.log(`\n\n`);
}
// Variaveis contador de Vitorias, Derrotas e Empates
let vitoria = 0
let derrota = 0
let empate = 0

while (start == "sim") {

// Variaveis


let npartidas = +prompt(`\nQuantas partidas gostaria de jogar?   \n`)

const jogada = ["Pedra", "Papel", "Tesoura"] 

let jogador 
let computador

for (let i = 0; i <= npartidas; i++) {

    // Jogada do Usuario

    let jokenpo = prompt(`\n\nPedra, Papel ou Tesoura?  \n\n`).toLowerCase()
    while (jokenpo != "pedra" && jokenpo != "papel" && jokenpo != "tesoura") {

        console.log(`\nComando invalido. Digite apenas pedra, papel ou tesoura.\n`);
        jokenpo = prompt("Pedra, Papel ou Tesoura?   ").toLowerCase()

    }   

    if (jokenpo == "pedra") {
        jogador = "pedra"
        console.log(`Você escolheu ${jogada[0]}`)            
    }else if (jokenpo == "papel") {
        jogador = "papel"
        console.log(`Você escolheu ${jogada[1]}`)         
    } else {
        jogador = "tesoura"
        console.log(`Você escolheu ${jogada[2]}`)         
    }

    // Jogada do computador        
    let numeroRandom = Math.floor(Math.random() * 3);
    if (numeroRandom == 0) {
        computador = "pedra"
        console.log(`Seu adversário escolheu ${jogada[0]}`)            
    }else if (numeroRandom == 1) {
        computador = "papel"
        console.log(`Seu adversário escolheu ${jogada[1]}`)         
    } else {
        computador = "tesoura"
        console.log(`Seu adversário escolheu ${jogada[2]}`)         
    }

  // Resultado da Partida 
  if ( (jogador=="pedra" && computador=="tesoura") || (jogador=="papel" && computador=="pedra") || (jogador=="tesoura" && computador=="papel")) {
    vitoria++
    console.log()
    console.log(`Você Venceu!!!`)
    console.log()
  } else if (jogador==computador) {
    empate++
    console.log()
    console.log(`Empate!!!`)
    console.log()
      
  } 
  else {
    derrota++
    console.log()  
    console.log(`Você Perdeu!!!`)
    console.log()
  }

     
}

console.log(`Numero de Vitórias: ${vitoria}`)
console.log(`Numero de Empates: ${empate}`)
console.log(`Numero de Derrotas: ${derrota}\n\n`)

  
if (vitoria>derrota) {
    console.log(`\nSua pontuação foi ${vitoria}, Você Venceu!\n\n`)
}else if (vitoria=derrota){
    console.log(`\nSua pontuação foi ${vitoria}, Igual a potuação do sue adversário ${derrota}, Você Empatou!\n\n`)
} else {
    console.log(`\nSua pontuação foi ${vitoria}, Você Perdeu!\n\n`)
}


 start = prompt("Gostaria de jogar novamente? Digite sim ou nao:   ")

while (start != "sim" && start != "nao") {
    console.log(`\nComando invalido. Digite apenas sim ou nao.\n`);
    start = prompt("Gostaria de jogar novamente?  ");
}   

if (start == "nao") {
    console.log()
    console.log("Fim do Jogo!");
    console.log()
    process.exit(1);
}else{
    console.log('\n\nJOKENPÔ\n\n')
    console.log(``);
}

}
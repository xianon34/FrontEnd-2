// Função Jogada aleatória do computador
function computerPlay() {
  const options = ["pedra", "papel", "tesoura"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Determina o resultado de um Round
function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "pedra":
      switch (computerSelection) {
        case "pedra":
          return "empate";
        case "papel":
          return "computador";
        case "tesoura":
          return "jogador";
      }
      break;
    case "papel":
      switch (computerSelection) {
        case "pedra":
          return "jogador";
        case "papel":
          return "empate";
        case "tesoura":
          return "computador";
      }
      break;
    case "tesoura":
      switch (computerSelection) {
        case "pedra":
          return "computador";
        case "papel":
          return "jogador";
        case "tesoura":
          return "empate";
      }
      break;
    default:
      return null;
  }
}

// Função principal do jogo
function game(difficulty) {
  let playerScore = 0;
  let computerScore = 0;
  let maxScore = 0;
  let previousPlayerSelection = null;

  switch (difficulty) {
    case "facil":
      maxScore = 2;
      break;
    case "medio":
      maxScore = 3;
      break;
    case "dificil":
      maxScore = 4;
      break;
    default:
      console.log("Dificuldade inválida!");
      return;
  }

  for (let i = 1; i <= 5; i++) {
    let playerSelection = "";
    while (true) {
      playerSelection = prompt("Escolha entre pedra, papel ou tesoura").toLowerCase();
      if (playerSelection === null) {
        // Se o usuário clicar em Cancelar, interrompa o jogo
        return;
      }
      if (playerSelection === "pedra" || playerSelection === "papel" || playerSelection === "tesoura") {
        // Opção válida, continue o jogo
        break;
      }
      alert("Opção inválida! Escolha entre pedra, papel ou tesoura.");
    }

    const computerSelection = getComputerSelection(previousPlayerSelection);
    const result = playRound(playerSelection, computerSelection);
    console.log(`Rodada ${i}: Jogador: ${playerSelection} x Computador: ${computerSelection} => ${result}`);
    switch (result) {
      // Atualiza a pontuação
      case "jogador":
        playerScore++;
        break;
      case "computador":
        computerScore++;
        break;
    }
    if (playerScore === maxScore || computerScore === maxScore) {
      // Interrompe o jogo caso um dos lados atinja a pontuação máxima e declara o vencedor
      if (playerScore > computerScore) {
        console.log("Você venceu o jogo!");
      } else if (playerScore < computerScore) {
        console.log("Você perdeu o jogo!");
      } else {
        console.log("O jogo terminou em empate!");
      }
      return;
    }

    previousPlayerSelection = playerSelection;
  }
}

// Função para obter a jogada do computador com base nas jogadas anteriores do jogador
function getComputerSelection(previousPlayerSelection) {
if (previousPlayerSelection) {
switch (previousPlayerSelection) {
case "pedra":
return "papel";
case "papel":
return "tesoura";
case "tesoura":
return "pedra";
}
}

return computerPlay();
}
game("facil"); // Exemplo de jogo com dificuldade fácil
game("medio"); // Exemplo de jogo com dificuldade média
game("dificil"); // Exemplo de jogo com dificuldade difícil
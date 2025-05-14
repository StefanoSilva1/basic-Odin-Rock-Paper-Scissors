const getComputerChoice = () => {
	let choice = Math.floor(Math.random() * 3)
	if (choice == 0) {
		return "rock"
	} else if (choice == 1) {
		return "paper"
	} else {
		return "scissors"
	}
}

const playRound = (humanChoice, computerChoice) => {
	if (humanChoice == computerChoice) {
		return "It's a tie!";
	} else if (
		(humanChoice == "rock" && computerChoice == "scissors") ||
		(humanChoice == "paper" && computerChoice == "rock") ||
		(humanChoice == "scissors" && computerChoice == "paper")
	) {
		
		return `You win! ${humanChoice} beats ${computerChoice}`;
	} else {
		return `You lose! ${computerChoice} beats ${humanChoice}`;
	}
}

const playGame = () => {

	let humanScore = 0
	let computerScore = 0
	const resultDiv = document.getElementById('result');
    const scoreDiv = document.getElementById('score');

	const updateScore = (result, humanChoice, computerChoice) => {
	if (result.includes("win")) {
		humanScore++;
	} else if (result.includes("lose")) {
		computerScore++;
	}
	resultDiv.textContent = result;
	scoreDiv.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
	if (humanScore == 5) {
		alert("You win the game!");
		return;
	} else if (computerScore == 5) {
		alert("You lose the game!");
		return;
	}
	};

	document.getElementById('rock').addEventListener('click', () => {
		const computerChoice = getComputerChoice();
		const result = playRound('rock', computerChoice);
		updateScore(result, 'rock', computerChoice);
	});

	document.getElementById('paper').addEventListener('click', () => {
		const computerChoice = getComputerChoice();
		const result = playRound('paper', computerChoice);
		updateScore(result, 'paper', computerChoice);
	});

	document.getElementById('scissors').addEventListener('click', () => {
		const computerChoice = getComputerChoice();
		const result = playRound('scissors', computerChoice);
		updateScore(result, 'scissors', computerChoice);
	});
};

playGame();

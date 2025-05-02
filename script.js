console.log("Hello World")

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

const getHumanChoice = () => {
	let choice = prompt("Rock, Paper, or Scissors?").toLowerCase()
	
	if (choice == "rock") {
		return "rock"
	} else if (choice == "paper") {
		return "paper"
	} else {
		return "scissors"
	}
}

const playRound = (humanChoice, computerChoice) => {
	if (humanChoice == computerChoice) {
		console.log("It's a tie!");
		return "tie"
	} else if (
		(humanChoice == "rock" && computerChoice == "scissors") ||
		(humanChoice == "paper" && computerChoice == "rock") ||
		(humanChoice == "scissors" && computerChoice == "paper")
	) {
		
		console.log("You win!")
		return "human"
	} else {
		console.log("You lose!")
		return "computer"
	}
}

const playGame = () => {

	let humanScore = 0
	let computerScore = 0
	for (let i = 0; i < 5; i++) {
		const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
		const result = playRound(humanChoice, computerChoice)
		if (result == "human") {
			humanScore += 1
		} else if (result == "computer") {
			computerScore += 1
		}
	}
	
	if (humanScore > computerScore) {
		console.log("You win the game!")
	} else if (humanScore < computerScore) {
		console.log("You lose the game!")
	} else {
		console.log("The game is a tie!")
	}
}

playGame();

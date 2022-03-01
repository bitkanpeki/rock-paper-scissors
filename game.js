const computerPlay = () => {
  const options = ['Rock', 'Paper', 'Scissors']
  return options[Math.floor(Math.random() * options.length)]
}

const sanitizeSelection = (playerSelection) => {
  const selectionLowerCase = playerSelection.toLowerCase()
  return `${selectionLowerCase
    .charAt(0)
    .toUpperCase()}${selectionLowerCase.slice(1)}`
}

const playRound = (playerSelection, computerSelection) => {
  const sanitizedPlayerSelection = sanitizeSelection(playerSelection)

  if (sanitizedPlayerSelection === computerSelection) return "It's a Draw!"

  if (sanitizedPlayerSelection === 'Rock') {
    return computerSelection === 'Paper'
      ? 'You Lose! Paper beats Rock'
      : 'You Win! Rock beats Scissors'
  }

  if (sanitizedPlayerSelection === 'Paper') {
    return computerSelection === 'Scissors'
      ? 'You Lose! Scissors beats Paper'
      : 'You Win! Paper beats Rock'
  }

  if (sanitizedPlayerSelection === 'Scissors') {
    return computerSelection === 'Rock'
      ? 'You Lose! Rock beats Scissors'
      : 'You Win! Scissors beats Paper'
  }
}

const playerSelection = 'RoCk'
const computerSelection = computerPlay()
console.log('Computer:', computerSelection)

console.log(playRound(playerSelection, computerSelection))

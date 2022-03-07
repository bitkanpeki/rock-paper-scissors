const computerPlay = () => {
  const options = ['Rock', 'Paper', 'Scissors']
  return options[Math.floor(Math.random() * options.length)]
}

const playRound = (playerSelection) => {
  const computerSelection = computerPlay()

  if (playerSelection === computerSelection) return 'draw'

  if (playerSelection === 'Rock') {
    return computerSelection === 'Paper' ? 'computer' : 'player'
  }

  if (playerSelection === 'Paper') {
    return computerSelection === 'Scissors' ? 'computer' : 'player'
  }

  if (playerSelection === 'Scissors') {
    return computerSelection === 'Rock' ? 'computer' : 'player'
  }
}

const game = () => {
  let playerScore = 0
  let computerScore = 0

  const displayPlayerScore = document.querySelector('.player')
  displayPlayerScore.textContent = playerScore

  const displayComputerScore = document.querySelector('.computer')
  displayComputerScore.textContent = computerScore

  const announce = document.querySelector('.announce')
  const btns = document.querySelectorAll('button')

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const winner = playRound(btn.id)
      if (winner === 'player') {
        playerScore = ++playerScore
      }
      if (winner === 'computer') {
        computerScore = ++computerScore
      }

      displayPlayerScore.textContent = playerScore
      displayComputerScore.textContent = computerScore
      if (playerScore >= 5) announce.textContent = 'Player wins the game'
      if (computerScore >= 5) announce.textContent = 'Computer wins the game'
    })
  })
}

game()

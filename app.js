const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const resetEl = document.querySelector('#reset')
let game1

render = () => {
  puzzleEl.textContent = game1.puzzle
  guessesEl.textContent = game1.statusMessage
}

startGame = async () => {
  const randomPuzzle = await getRandomPuzzle('1')
  game1 = new Hangman(randomPuzzle, 5)
  render()
}


window.addEventListener('keydown', (e) => {
  if ((e.keyCode > 64 && e.keyCode < 91) || (e.keyCode > 96 && e.keyCode < 123)) {
      const guess = String.fromCharCode(e.keyCode)
      game1.makeGuess(guess)
      puzzleEl.textContent = game1.puzzle
      guessesEl.textContent = game1.statusMessage

  }
})

startGame()

resetEl.addEventListener('click', startGame)
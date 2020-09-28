const game1 = new Hangman('new york', 2)
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

getRandomPuzzle((error, randomPuzzle) => {
  if(error){
    console.log(`Error: ${error}`)
  }else{
    console.log(randomPuzzle)
  }
})

window.addEventListener('keydown', (e) => {
  if ((e.keyCode > 64 && e.keyCode < 91) || (e.keyCode > 96 && e.keyCode < 123)) {
      const guess = String.fromCharCode(e.keyCode)
      game1.makeGuess(guess)
      puzzleEl.textContent = game1.puzzle
      guessesEl.textContent = game1.statusMessage

  }
})
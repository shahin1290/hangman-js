class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLtetters = []
    this.status = 'playing'
  }
  calculateStatus() {
    /* let finished = true
  
    this.word.forEach(letter => {
      if(this.guessedLtetters.includes(letter)){
  
      }else{
        finished = false
      }
    }) */

    /* const lettersUnguessed = this.word.filter((letter) => {
      return !this.guessedLtetters.includes(letter)
    })
  
    const finished = lettersUnguessed.length ===  0 */

    const finished = this.word.every((letter) =>
      this.guessedLtetters.includes(letter) || letter === ' '
    )

    if (this.remainingGuesses === 0) {
      this.status = 'failed'
    } else if (finished) {
      this.status = 'finished'
    } else {
      this.status = 'playing'
    }
  }
  get statusMessage() {
    if (this.status === 'playing') {
      return `Guesses left: ${this.remainingGuesses}`
    } else if (this.status === 'failed') {
      return `Nice try! The word was "${this.word.join('')}"`
    } else {
      return 'Great work! You have guessed it'
    }
  }

  get puzzle() {
    let puzzle = ''

    this.word.forEach((letter) => {
      if (this.guessedLtetters.includes(letter) || letter === ' ') {
        puzzle += letter
      } else {
        puzzle += '*'
      }
    })

    return puzzle
  }
  makeGuess(guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLtetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (this.status !== 'playing') {
      return
    }

    if (isUnique) {
      this.guessedLtetters.push(guess)
    }

    if (isUnique && isBadGuess) {
      this.remainingGuesses--
    }

    this.calculateStatus()
  }
}

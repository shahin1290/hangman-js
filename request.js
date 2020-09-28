//######################## XHR with CallBacks ####################################

/* const getRandomPuzzle = (callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      callback(undefined, data.puzzle)
    } else if (e.target.readyState === 4) {
      callback('An error has taken place', undefined) //no need 2nd parameter, because it is default
    }
  })

  request.open('GET', 'http://puzzlee.mead.io/puzzle')
  request.send()

} */

//######################## XHR with Promise ####################################

/* const getRandomPuzzle = (wordCount) => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      resolve(data.puzzle)
    } else if (e.target.readyState === 4) {
      reject('An error has taken place')
    }
  })

  request.open('GET', `http://puzzle.mead.io/puzzle?wordCountt=${wordCount}`)
  request.send()
})
 */

//######################## Fetch API (returns Promise) ####################################

/* const getRandomPuzzle = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw new Error('Unable to fetch puzzle')
      }
    })
    .then((data) => data.puzzle)
}
 */
//######################## async/await (returns Promise) ####################################

const getRandomPuzzle = async (wordCount) => {
  const response = await fetch(
    `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`,
    {}
  )

  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to fetch puzzle')
  }
}

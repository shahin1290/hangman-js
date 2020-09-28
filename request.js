const getRandomPuzzle = (callback) => {
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

}
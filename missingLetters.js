const findMissingLetters = string => {
  if (typeof string !== 'string') {
    throw new TypeError(
      'findMissingLettersCache must take a string as an input.'
    )
  }

  // lowercase later
  const characters = [...string.toLowerCase()]
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
  const presentCharactersCache = {}

  // Cache all characters present in input string:
  characters.forEach(char => {
    if (!presentCharactersCache[char]) presentCharactersCache[char] = true
  })

  const alphabetArray = [...alphabetString]

  const missingLettersArray = alphabetArray.filter(
    letter => !presentCharactersCache[letter]
  )

  const missingLettersString = missingLettersArray.join('')
  console.log('m', missingLettersString)
  return missingLettersString
}

const slowFox = 'A slow yellow fox crawls under the proactive dog'

findMissingLetters(slowFox)

module.exports = findMissingLetters

const validateArgument = string => {
  if (typeof string !== 'string') {
    throw new TypeError(
      'getMissingLettersCache must take a string as an input.'
    )
  }
}

const cacheLetters = letters => {
  const letterCache = {}

  letters.forEach(char => {
    // Convert each character to lower case...
    const letter = char.toLowerCase()
    // and then store each unique letter in the "letterCache" object:
    if (!letterCache[letter]) letterCache[letter] = true
  })

  return letterCache
}

const composeMissingLetters = letterCache => {
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
  const alphabetArray = [...alphabetString]
  // It would be more performant to simply hardcode "alphabetArray",
  // but for the sake of readability, I opted not to do so here.

  // Find all letters in the alphabet not present in the "letterCache"
  // (i.e., not present in the input string):
  const missingLettersArray = alphabetArray.filter(
    letter => !letterCache[letter]
  )

  const missingLettersString = missingLettersArray.join('')

  return missingLettersString
}

const getMissingLetters = string => {
  validateArgument(string)

  const letters = [...string]
  const letterCache = cacheLetters(letters)

  const missingLetters = composeMissingLetters(letterCache)

  return missingLetters
}

module.exports = getMissingLetters

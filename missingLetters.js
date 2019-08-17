const getMissingLetters = string => {
  if (typeof string !== 'string') {
    throw new TypeError(
      'getMissingLettersCache must take a string as an input.'
    )
  }

  const characters = [...string]
  const presentCharacters = {}

  characters.forEach(char => {
    // Store each unique character in the presentCharacters object:
    if (!presentCharacters[char]) {
      presentCharacters[char] = true
    }
  })

  const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
  const alphabetArray = [...alphabetString]

  // Find all letters in the alphabet not present in the input string:
  const missingLettersArray = alphabetArray.filter(
    letter =>
      !presentCharacters[letter] &&
      !presentCharacters[letter.toLocaleUpperCase()] // (Case insensitive.)
  )

  const missingLettersString = missingLettersArray.join('')

  return missingLettersString
}

module.exports = getMissingLetters

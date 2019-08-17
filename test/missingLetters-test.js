const { expect } = require('chai')
const findMissingLetters = require('../missingLetters')

describe('findMissingLetters', () => {
  it('should take a string as an input', () => {
    const badInputs = [undefined, null, 1, {}, []]

    badInputs.forEach(badInput => {
      expect(() => findMissingLetters(badInput)).to.throw(TypeError)
    })
  })

  const slowFox = 'A slow yellow fox crawls under the proactive dog'
  const lions = 'Lions, and tigers, and bears, oh my!'
  const empty = ''

  const missingFromSlowFox = findMissingLetters(slowFox)
  const missingFromLions = findMissingLetters(lions)
  const missingFromEmpty = findMissingLetters(empty)

  it('should return all letters not present in the input string', () => {
    expect(missingFromSlowFox.to.equal('bjkmqz'))
    expect(missingFromLions.to.equal('cfjkpquvwxz'))
    expect(missingFromEmpty.to.equal('abcdefghijklmnopqrstuvwxyz'))
  })

  it('should return letters in lowercase', () => {
    expect(missingFromSlowFox.to.equal(missingFromSlowFox.toLowerCase()))
    expect(missingFromLions.to.equal(missingFromLions.toLowerCase()))
    expect(missingFromEmpty.to.equal(missingFromEmpty.toLowerCase()))
  })

  it('should return letters in alphabetical order', () => {
    expect(missingFromSlowFox.to.equal(missingFromSlowFox.sort()))
    expect(missingFromLions.to.equal(missingFromLions.sort()))
    expect(missingFromEmpty.to.equal(missingFromEmpty.sort()))
  })

  it('should return an empty string when given a pangram', () => {
    const pangram = 'A quick brown fox jumps over the lazy dog'
    expect(findMissingLetters(pangram)).to.equal('')
  })
})

const { expect } = require('chai')
const getMissingLetters = require('../missingLetters')

describe('getMissingLetters', () => {
  const badInputs = [undefined, null, 1, {}, []]

  const slowFox = 'A slow yellow fox crawls under the proactive dog'
  const lions = 'Lions, and tigers, and bears, oh my!'
  const empty = ''

  const missingFromSlowFox = getMissingLetters(slowFox)
  const missingFromLions = getMissingLetters(lions)
  const missingFromEmpty = getMissingLetters(empty)

  it('should take a string as an input', () => {
    badInputs.forEach(badInput => {
      expect(() => getMissingLetters(badInput)).to.throw(TypeError)
    })
  })

  it('should return a string', () => {
    expect(missingFromSlowFox).to.be.a('string')
    expect(missingFromLions).to.be.a('string')
    expect(missingFromEmpty).to.be.a('string')
  })

  it('should return all letters not present in the input string', () => {
    expect(missingFromSlowFox).to.equal('bjkmqz')
    expect(missingFromLions).to.equal('cfjkpquvwxz')
    expect(missingFromEmpty).to.equal('abcdefghijklmnopqrstuvwxyz')
  })

  it('should return letters in lowercase', () => {
    expect(missingFromSlowFox).to.equal(missingFromSlowFox.toLowerCase())
    expect(missingFromLions).to.equal(missingFromLions.toLowerCase())
  })

  it('should return letters in alphabetical order', () => {
    const missingFromSlowFoxArray = missingFromSlowFox.split('')
    const missingFromLionsArray = missingFromLions.split('')

    expect(missingFromSlowFoxArray).to.deep.equal(
      missingFromSlowFoxArray.sort()
    )
    expect(missingFromLionsArray).to.deep.equal(missingFromLionsArray.sort())
  })

  it('should return an empty string when given a pangram', () => {
    const pangram = 'A quick brown fox jumps over the lazy dog'
    expect(getMissingLetters(pangram)).to.equal('')
  })
})

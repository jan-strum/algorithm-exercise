const { expect } = require('chai')
const animate = require('../animation')

describe('animate', () => {
  const result0 = animate(2, '..R....')
  const result1 = animate(3, 'RR..LRL')
  const result2 = animate(2, 'LRLR.LRLR')
  const result3 = animate(10, 'RLRLRLRLRL')
  const result4 = animate(1, '...')
  const result5 = animate(1, 'LRRL.LR.LRR.R.LRRL.')

  it('should take a positive integer representing speed as its first argument', () => {
    expect(() => animate('1')).to.throw(TypeError)
    expect(() => animate(0)).to.throw(Error)
  })

  it('should take a string of positions as its second argument', () => {
    // Test case with 'LX.RQ>' as second argument
    expect(() => animate(1, ['L', '.', 'R'])).to.throw(TypeError)
  })

  it('should return an array given valid arguments', () => {
    const result = animate(1, 'L.R')

    expect(result).to.be.an('array')
  })

  it('should return an array, the first element of which represents the inital state of the chamber', () => {
    expect(result0[0]).to.deep.equal(['..X....'])
    expect(result1[0]).to.deep.equal(['XX..XXX'])
    expect(result2[0]).to.deep.equal(['XXXX.XXXX'])
    expect(result3[0]).to.deep.equal(['XXXXXXXXXX'])
    expect(result4[0]).to.deep.equal(['...'])
    expect(result5[0]).to.deep.equal(['XXXX.XX.XXX.X.XXXX.'])
  })

  it('should return an array, the last element of which represents the the final, empty state of the chamber', () => {
    expect(result0[result0.length - 1]).to.deep.equal(['.......'])
    expect(result1[result1.length - 1]).to.deep.equal(['.......'])
    expect(result2[result2.length - 1]).to.deep.equal(['.........'])
    expect(result3[result3.length - 1]).to.deep.equal(['..........'])
    expect(result4[result4.length - 1]).to.deep.equal(['...'])
    expect(result5[result5.length - 1]).to.deep.equal(['...................'])
  })

  it('should return an array, each element of which represents the state of the chamber at the corresponding index', () => {
    expect(result0).to.deep.equal(['..X....', '....X..', '......X', '.......'])
    expect(result1).to.deep.equal(['XX..XXX', '.X.XX..', 'X.....X', '.......'])
    expect(result2).to.deep.equal([
      'XXXX.XXXX',
      'X..X.X..X',
      '.X.X.X.X.',
      '.X.....X.',
      '.........'
    ])
    expect(result3).to.deep.equal(['XXXXXXXXXX', '..........'])
    expect(result4).to.deep.equal(['...'])
    expect(result5).to.deep.equal([
      'XXXX.XX.XXX.X.XXXX.',
      '..XXX..X..XX.X..XX.',
      '.X.XX.X.X..XX.XX.XX',
      'X.X.XX...X.XXXXX..X',
      '.X..XXX...X..XX.X..',
      'X..X..XX.X.XX.XX.X.',
      '..X....XX..XX..XX.X',
      '.X.....XXXX..X..XX.',
      'X.....X..XX...X..XX',
      '.....X..X.XX...X..X',
      '....X..X...XX...X..',
      '...X..X.....XX...X.',
      '..X..X.......XX...X',
      '.X..X.........XX...',
      'X..X...........XX..',
      '..X.............XX.',
      '.X...............XX',
      'X.................X',
      '...................'
    ])
  })
})

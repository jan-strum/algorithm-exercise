const { expect } = require('chai')
const animate = require('../animation')

describe('animate', () => {
  const animation0 = animate(2, '..R....')
  const animation1 = animate(3, 'RR..LRL')
  const animation2 = animate(2, 'LRLR.LRLR')
  const animation3 = animate(10, 'RLRLRLRLRL')
  const animation4 = animate(1, '...')
  const animation5 = animate(1, 'LRRL.LR.LRR.R.LRRL.')

  it('should take a positive integer representing speed as its first argument', () => {
    expect(() => animate('1')).to.throw(TypeError)
    expect(() => animate(0)).to.throw(Error)
  })

  it('should take a string of positions as its second argument', () => {
    // Test case with 'LX.RQ>' as second argument
    expect(() => animate(1, ['L', '.', 'R'])).to.throw(TypeError)
  })

  it('should return an array given valid arguments', () => {
    const animation = animate(1, 'L.R')

    expect(animation).to.be.an('array')
  })

  it('should return an array, the first element of which represents the inital state of the chamber', () => {
    expect(animation0[0]).to.deep.equal('..X....')
    expect(animation1[0]).to.deep.equal('XX..XXX')
    expect(animation2[0]).to.deep.equal('XXXX.XXXX')
    expect(animation3[0]).to.deep.equal('XXXXXXXXXX')
    expect(animation4[0]).to.deep.equal('...')
    expect(animation5[0]).to.deep.equal('XXXX.XX.XXX.X.XXXX.')
  })

  it('should return an array, the last element of which represents the the final, empty state of the chamber', () => {
    expect(animation0[animation0.length - 1]).to.deep.equal('.......')
    expect(animation1[animation1.length - 1]).to.deep.equal('.......')
    expect(animation2[animation2.length - 1]).to.deep.equal('.........')
    expect(animation3[animation3.length - 1]).to.deep.equal('..........')
    expect(animation4[animation4.length - 1]).to.deep.equal('...')
    expect(animation5[animation5.length - 1]).to.deep.equal(
      '...................'
    )
  })

  // it('should return an array, each element of which represents the state of the chamber at the corresponding index', () => {
  //   expect(animation0).to.deep.equal([
  //     '..X....',
  //     '....X..',
  //     '......X',
  //     '.......'
  //   ])
  //   expect(animation1).to.deep.equal([
  //     'XX..XXX',
  //     '.X.XX..',
  //     'X.....X',
  //     '.......'
  //   ])
  //   expect(animation2).to.deep.equal([
  //     'XXXX.XXXX',
  //     'X..X.X..X',
  //     '.X.X.X.X.',
  //     '.X.....X.',
  //     '.........'
  //   ])
  //   expect(animation3).to.deep.equal(['XXXXXXXXXX', '..........'])
  //   expect(animation4).to.deep.equal(['...'])
  //   expect(animation5).to.deep.equal([
  //     'XXXX.XX.XXX.X.XXXX.',
  //     '..XXX..X..XX.X..XX.',
  //     '.X.XX.X.X..XX.XX.XX',
  //     'X.X.XX...X.XXXXX..X',
  //     '.X..XXX...X..XX.X..',
  //     'X..X..XX.X.XX.XX.X.',
  //     '..X....XX..XX..XX.X',
  //     '.X.....XXXX..X..XX.',
  //     'X.....X..XX...X..XX',
  //     '.....X..X.XX...X..X',
  //     '....X..X...XX...X..',
  //     '...X..X.....XX...X.',
  //     '..X..X.......XX...X',
  //     '.X..X.........XX...',
  //     'X..X...........XX..',
  //     '..X.............XX.',
  //     '.X...............XX',
  //     'X.................X',
  //     '...................'
  //   ])
  // })
})

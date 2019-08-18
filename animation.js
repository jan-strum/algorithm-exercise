/* eslint-disable complexity */
const animate = (speed, init) => {
  if (!Number.isInteger(speed)) {
    throw new TypeError('The first argument must be an integer.')
  } else if (speed < 1) {
    throw new Error('The first argument must be a positive integer.')
  } else if (typeof init !== 'string') {
    throw new TypeError('The second argument must be a string.')
  }

  const checkChamber = nextAnimation => {
    let isEmpty = false

    for (let i = 0; i < nextAnimation.length; i++) {
      let particle = nextAnimation[i]

      if (particle !== '.') {
        isEmpty = false
        return isEmpty
      } else {
        isEmpty = true
      }
    }

    return isEmpty
  }

  const computeAnimation = animationNumber => {
    const animation = [...init].map(location => '.')

    for (let i = 0; i < init.length; i++) {
      let direction = init[i] // 'L', 'R', or '.'
      let nextLocation = // A particle's next location, given its index,
        // direction, the chamber's speed, and the animationNumber.
        direction === 'L'
          ? i - speed * animationNumber
          : i + speed * animationNumber

      // The second expression of the following two conditions checks
      // to see whether or not a particle's location is within the chamber.
      // If it is, the position is marked with an 'X'. If it is not,
      // nothing is done.
      if (direction === 'L' && init[nextLocation]) {
        animation[nextLocation] = 'X'
      } else if (direction === 'R' && init[nextLocation]) {
        animation[nextLocation] = 'X'
      }
    }

    const animationString = animation.join('')

    return animationString
  }

  let chamberIsEmpty
  let currentAnimation
  let animationNumber = 0
  const animations = []

  while (!chamberIsEmpty) {
    // By initializing — but not defining — chamberIsEmpty above,
    // the animation for 'init' is always computed and pushed
    // into the animations array, regardless of whether or not
    // 'init' denotes an empty chamber.
    currentAnimation = computeAnimation(animationNumber)
    animations.push(currentAnimation)

    animationNumber++
    chamberIsEmpty = checkChamber(currentAnimation)
  }

  return animations
}

// const a = animate(3, 'RR..LRL')
// console.log(a)

module.exports = animate

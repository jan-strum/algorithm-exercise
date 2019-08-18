const validateArguments = (speed, init) => {
  if (!Number.isInteger(speed)) {
    throw new TypeError('The first argument must be an integer.')
  } else if (speed < 1) {
    throw new Error('The first argument must be a positive integer.')
  }

  if (typeof init !== 'string') {
    throw new TypeError('The second argument must be a string.')
  }

  const initArray = [...init]

  initArray.forEach(value => {
    if (!['L', 'R', '.'].includes(value)) {
      throw new Error(
        'The second  argument must only contain the following characters: "L", "R", and "."'
      )
    }
  })
}

const checkChamber = nextAnimation => {
  let isEmpty = false

  for (let i = 0; i < nextAnimation.length; i++) {
    let particle = nextAnimation[i]

    if (particle !== '.') {
      isEmpty = false
      // As soon as a position in the chamber is found to be occupied,
      // this function will return false:
      return isEmpty
    } else {
      isEmpty = true
    }
  }

  return isEmpty
}

const computeAnimation = (speed, init, animationsIndex) => {
  // Create an array of unoccupied locations:
  const animation = [...init].map(location => '.')

  for (let i = 0; i < init.length; i++) {
    const direction = init[i] // "L", "R", or ."
    const nextLocation = // A particle's next location, given its index,
      // direction, the chamber's speed, and the animationsIndex.
      direction === 'L'
        ? i - speed * animationsIndex
        : i + speed * animationsIndex

    // The second expression of the following two conditions checks
    // to see whether or not a particle's location is within the chamber.
    // If it is, the position is marked with an "X". If it is not,
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

const animate = (speed, init) => {
  validateArguments(speed, init)

  let chamberIsEmpty
  let currentAnimation
  let animationsIndex = 0 // This corresponds to the index of the returned
  // animations array, defined below.
  const animations = []

  while (!chamberIsEmpty) {
    // By initializing — but not defining — chamberIsEmpty above,
    // the animation for "init" is always computed and pushed
    // into the animations array, regardless of whether or not
    // "init" denotes an empty chamber (i.e., regardless of
    // whether or not "chamberIsEmpty" is true).
    currentAnimation = computeAnimation(speed, init, animationsIndex)
    animations.push(currentAnimation)

    animationsIndex++
    chamberIsEmpty = checkChamber(currentAnimation)
  }

  return animations
}

module.exports = animate

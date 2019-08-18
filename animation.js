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

const checkChamber = chamber => {
  const isEmpty = [...chamber].every(position => position === '.')

  return isEmpty
}

const computeAnimation = (speed, init, time) => {
  // Create an array of unoccupied locations:
  const animation = [...init].map(location => '.')

  for (let i = 0; i < init.length; i++) {
    const direction = init[i] // "L", "R", or "."
    const nextLocation = direction === 'L' ? i - speed * time : i + speed * time
    // A particle's next location, given its, direction, index, the chamber's speed,
    // and the time.

    // The second expression of the following two conditions checks to see
    // whether or not a particle's next location will be within the chamber.
    // If it is, the position is marked with an "X". If it is not, nothing is done.
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
  let time = 0
  // The "time" corresponds to the point in time of any given animation
  // (i.e., a given index of the returned animations array, defined below).
  const animations = []

  while (!chamberIsEmpty) {
    // By initializing — but not defining — chamberIsEmpty above, the animation
    // for "init" is always computed and pushed into the animations array,
    // regardless of whether or not "init" denotes an empty chamber.
    currentAnimation = computeAnimation(speed, init, time)
    animations.push(currentAnimation)

    chamberIsEmpty = checkChamber(currentAnimation)
    time++
  }

  return animations
}

module.exports = animate

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

  const computeAnimation = animationIndex => {
    // make this the else
    const animation = [...init].map(position => '.')

    for (let i = 0; i < init.length; i++) {
      let direction = init[i]
      let nextPosition =
        direction === 'L'
          ? i - speed * animationIndex
          : i + speed * animationIndex

      if (direction === 'L' && animation[nextPosition]) {
        animation[nextPosition] = 'X'
      } else if (direction === 'R' && animation[nextPosition]) {
        animation[nextPosition] = 'X'
      }
    }

    const animationString = animation.join('')

    return animationString
  }

  let chamberIsEmpty = checkChamber(init)
  let animationIndex = 0
  let currentAnimation
  const animations = []

  while (!chamberIsEmpty || !animationIndex) {
    currentAnimation = computeAnimation(animationIndex)
    animations.push(currentAnimation)

    animationIndex++
    chamberIsEmpty = checkChamber(currentAnimation)
  }

  return animations
}

module.exports = animate

const animate = (speed, init) => {
  if (!Number.isInteger(speed)) {
    throw new TypeError('The first argument must be an integer.')
  } else if (speed < 1) {
    throw new Error('The first argument must be a positive integer.')
  } else if (typeof init !== 'string') {
    throw new TypeError('The second argument must be a string.')
  }

  // specify diff between animation & state
  const computeCurrentAnimation = state => {
    // console.log('state', state)
    let currentAnimationArray = [...state]

    for (let i = 0; i < state.length; i++) {
      let particle = state[i]

      if (particle === '.') currentAnimationArray.splice(i, 1, '.')
      else currentAnimationArray.splice(i, 1, 'X')
    }

    const currentAnimationString = currentAnimationArray.join('')
    return currentAnimationString
  }

  // specify diff between animation & state
  const computeNextState = currentState => {
    let nextState = [...currentState]

    for (let i = 0; i < currentState.length; i++) {
      let particle = currentState[i]

      if (particle === 'L') {
        nextState.splice(i, 1, '.')
        if (i - speed >= 0) {
          nextState.splice(i - speed, 1, 'L')
        }
      } else if (particle === 'R') {
        nextState.splice(i, 1, '.')
        if (i + speed <= currentState.length - 1) {
          nextState.splice(i + speed, 1, 'R')
        }
      }
    }

    return nextState
  }

  const checkChamber = state => {
    let isEmpty = false

    for (let i = 0; i < state.length; i++) {
      let particle = state[i]

      if (particle !== '.') {
        isEmpty = false
        return isEmpty
      } else {
        isEmpty = true
      }
    }

    return isEmpty
  }

  const animation = []

  // let chamberIsEmpty = checkChamber(init)
  let chamberIsEmpty = false

  let currentState = init

  while (!chamberIsEmpty) {
    let currentAnimation = computeCurrentAnimation(currentState)
    animation.push(currentAnimation)

    let nextState = computeNextState(currentState)
    chamberIsEmpty = checkChamber(currentState)
    currentState = nextState
  }

  return animation
}

module.exports = animate

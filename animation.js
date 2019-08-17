const animate = (speed, init) => {
  if (!Number.isInteger(speed)) {
    throw new TypeError('The first argument must be an integer.')
  } else if (speed < 1) {
    throw new Error('The first argument must be a positive integer.')
  } else if (typeof init !== 'string') {
    throw new TypeError('The second argument must be a string.')
  }

  const computeCurrentAnimation = state => {
    let curreentAnimation = ''
    for (let i = 0; i < init.length; i++) {
      let particle = init[i]

      if (particle === '.') curreentAnimation[i] = '.'
      else curreentAnimation[i] = 'X'
    }

    return curreentAnimation
  }

  const computeNextState = (speed, currentState) => {
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

  const checkContainer = () => {
    let isEmpty = false

    for (let i = 0; i < init.length; i++) {
      let particle = init[i]

      if (particle !== '.') {
        isEmpty = false
        return isEmpty
      } else {
        isEmpty = true
      }
    }

    return isEmpty
  }

  let chamberIsEmpty = checkContainer(init)
  const animation = []

  return animation
}

module.exports = animate

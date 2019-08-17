const animate = (speed, init) => {
  if (!Number.isInteger(speed)) {
    throw new TypeError('The first argument must be an integer.')
  } else if (speed < 1) {
    throw new Error('The first argument must be a positive integer.')
  } else if (typeof init !== 'string') {
    throw new TypeError('The second argument must be a string.')
  }

  // fix param / move outside
  const checkContainer = init => {
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

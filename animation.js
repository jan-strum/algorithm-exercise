const animate = (speed, init) => {
  if (!Number.isInteger(speed)) {
    throw new TypeError('The first argument must be an integer.')
  } else if (speed < 1) {
    throw new Error('The first argument must be a positive integer.')
  } else if (typeof init !== 'string') {
    throw new TypeError('The second argument must be a string.')
  }

  return []
}

module.exports = animate

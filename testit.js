const animate = require('./animation')

const createStr = () => {
  let str = ''
  for (let i = 0; i < 100000; i++) {
    str += 'RL.'
  }

  return str
}

const str = createStr()

animate(15000, str)
// console.log(animation)

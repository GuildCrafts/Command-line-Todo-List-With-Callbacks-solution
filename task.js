const add = require('./commands/add')
const done = require('./commands/done')
const list = require('./commands/list')

const firstArgument = process.argv[2]
const secondArgument = process.argv[3]

switch (firstArgument) {
  case 'add':
    add(secondArgument)
    break
  case 'done':
    done(secondArgument)
    break
  case 'list':
    list(secondArgument)
    break
  default:
    console.log('Invalid Argument')
}

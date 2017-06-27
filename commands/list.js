const dataFile = require('../dataFile')

module.exports = () => {
  dataFile.read(tasks => {
    console.log("ID Description")
    console.log("-- -----------")
    tasks.forEach( (task, index) => {
      if (task.complete) return
      console.log(`${index+1}  ${task.title}`)
    })
    console.log(`\n${tasks.length} tasks.`)
  })
}

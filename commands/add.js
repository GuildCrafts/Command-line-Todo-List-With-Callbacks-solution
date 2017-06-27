const dataFile = require('../dataFile')

module.exports = (taskTitle) => {
  dataFile.read(tasks => {
    tasks.push({
      title: taskTitle,
      complete: false,
    })
    dataFile.write(tasks, () => {
      console.log(`Created task ${tasks.length}`)
    })
  })
}

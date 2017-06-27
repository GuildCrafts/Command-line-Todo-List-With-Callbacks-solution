const dataFile = require('../dataFile')

module.exports = (taskIndex) => {
  dataFile.read(tasks => {
    const task = tasks[Number(taskIndex) - 1]
    if (!task) {
      console.log('there is not task '+taskIndex)
      process.exit(1)
    }
    task.complete = true
    dataFile.write(tasks, () => {
      console.log(`Completed the task '${task.title}'`)
    })
  })
}

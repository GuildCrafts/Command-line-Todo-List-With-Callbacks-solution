const path = require('path')
const fs = require('fs')

const DataFilePath = path.resolve(process.env.HOME, '.task.json')

const readDataFile = callback => {
  fs.readFile(DataFilePath, (error, json) => {
    if (error){
      if (error.message.includes('ENOENT')){
        callback([])
      }else{
        bail(error)
      }
    }else{
      callback(JSON.parse(json))
    }
  })
}

const writeDataFile = (data, callback) => {
  if (!Array.isArray(data)) bail(new Error('data must be an array'))
  fs.writeFile(DataFilePath, JSON.stringify(data, null, 2), (error) => {
    if (error){
      bail(error)
    }else{
      callback(data)
    }
  })
}

const bail = error => {
  console.error(error)
  process.exit(1)
}

module.exports = {
  read: readDataFile,
  write: writeDataFile,
}

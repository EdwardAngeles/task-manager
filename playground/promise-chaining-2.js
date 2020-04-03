require('../src/db/mongoose')
const Task = require('../src/models/task')

/*Task.findByIdAndDelete('5e8650bbb376522404a5a36f')
.then((task) => {
  console.log(task)
  return Task.countDocuments({completed: false})
})
.then((count) => {
  console.log(`count: ${count}`)
})
.catch((error) => {
  console.log(error)
})*/

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({completed:false})
  return count
}

deleteTaskAndCount('5e86504ab376522404a5a36c')
.then((count) => console.log(`count: ${count}`))
.catch((error) => console.log(`error: ${error}`))
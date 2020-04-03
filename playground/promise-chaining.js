require('../src/db/mongoose')
const User = require('../src/models/user')

// userId = 5e8648f33483ab2ee0dc31ad
// todo: change the age of an user, get user with that same age
/*
User.findByIdAndUpdate('5e84b7a37e40a01ac880a88b', {age: 18})
.then((user) => {
  console.log(user)
  return User.countDocuments({age: 18})
})
.then((count) => console.log(count))
.catch((error) => console.log(error))*/

const updateAgeAndCount = async (id, age) => {
  const user  = await User.findByIdAndUpdate(id, {age})
  const count = await User.countDocuments({age})
  return count
}

updateAgeAndCount('5e84b7a37e40a01ac880a88b', 25)
.then((count)  => console.log(`count ${count}`))
.catch((error) => console.log(`error: ${error}`))
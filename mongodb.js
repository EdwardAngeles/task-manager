// CRUD: create, read, update and delete.

const {MongoClient, ObjectID} = require('mongodb')

const    url = 'mongodb://localhost:27017' // <- localhost = 127.0.0.1 
const dbName = 'task-manager'

MongoClient.connect(url, {useUnifiedTopology: true}, (error, client) => {
  if (error) return console.log('Unable to connect to database.')
  const db = client.db(dbName)
  
  db.collection('tasks').deleteMany({description: 'Make dinner'})
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
})
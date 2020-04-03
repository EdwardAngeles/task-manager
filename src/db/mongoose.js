const  mongoose = require('mongoose')

const     url = 'mongodb://localhost:27017/task-manager-api'
const options = {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}
mongoose.connect(url, options)


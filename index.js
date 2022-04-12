const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://rtbt123:rkdals123@cluster0.ktabo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
', {
  useNewUrlParser: true, useUnfiedTopology: true.
  useCreateIndex: true. useFindAndModify: false
}).then(() => console.log('MongoDB Connected'));
 .catch(err => console.log(err))
app.get('/', (req, res) => {
  res.send('하이 ㅋㅋ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

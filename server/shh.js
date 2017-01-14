const express = require('express')
const path = require('path')
const app = express()

app.disable('x-powered-by')
app.disable('x-content-type-options')
app.use(express.static(path.join(__dirname, '../client')))

app.listen(7000, () => {
  console.log('.: localhost:7000 :.')
})
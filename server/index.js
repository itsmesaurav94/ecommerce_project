const express = require('express')
const app = express()
const port = 4000

app.get('/me', (req, res) => {
  res.send({
    name:"kaylin",
    balance: 100000,
    rewardPoint: 100
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
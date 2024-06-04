const express = require('express')
const dbConnect = require('./src/db/connection')
dbConnect()
// const bcrypt = require('bcrypt');
// const saltRounds = 10;
const app = express()
require('dotenv').config()
app.use(express.json())
const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: String, // String is shorthand for {type: String}
  phoneNumber: String,
  email: String,
  password: String,
  gender: {
    type: String,
    enum: ['male', 'female','other'],
    default: 'female'
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  },
  
});


const User = mongoose.model('User', userSchema);
const port = process.env.PORT


app.post('/register', (req, res) => {
   User.create(req.body)
  res.send('ok')
})

app.get('/users', async (req, res) => {
  const data = await User.find()
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
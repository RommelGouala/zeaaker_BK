const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const mainRoutes = require('./routes/index')
const userRoutes = require('./routes/user')

const app = express()

//middleware
app.use(express.json())
app.use(cors({
  origin: ['https://zeaker.netlify.app','http://localhost:3000'],
  methods: ['POST','PUT','DELETE','GET','PATCH'],
  credentials:true,
  optionSuccessStatus:200,
  allowedHeaders: ['Accept','Content-Type','authorization','access-control-allow-origin'],
  preflightContinue: true
}))


//routes
app.use('/index', mainRoutes)
app.use('/user', userRoutes)

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB locked and loaded'))
    .catch(err => console.error(err));

const PORT = process.env.PORT

app.listen(PORT, console.log(`Live and localwide at port: ${PORT}`))
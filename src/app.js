const express = require('express');

// connect Atlas mongoDB server
const mongoose = require('mongoose');
require('dotenv').config()

// App
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))



// Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}) 

const db = mongoose.connection


db.on('connected', () => {
  console.log('Mongoose default connection is open');
})

db.on('error', err => {
  console.log(`Mongoose default connection has ocured \n${err}`);
})

db.on('disconnected', () => {
  console.log('Mongoose default connection is disconnected');
})

process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose default connection is disconnected due to application termination');
    process.exit(0)
  })
})

// Models
const Personal = require('./models/personal')

// Rotas
const indexRoutes = require('./routes/index-routes')
app.use('/', indexRoutes)

const personalRoutes = require('./routes/personal-routes')
app.use('/personal', personalRoutes)

module.exports = app
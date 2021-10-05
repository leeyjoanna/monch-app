const config = require('./utils/config')
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const router = require('./controllers/list')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then( () => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/monchapi', router)

app.use('/*', function (req, res) {
  // console.log('request', req.query)
  // console.log('url', req.url)
  // console.log('OG url', req.originalUrl)
  // console.log('path', req.path)
  // console.log('base', req.baseUrl)
  const searchQuery = req.originalUrl.split('?')

  if(searchQuery[1]){
    res.redirect(searchQuery[0])
  }
  else{
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  }

});

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
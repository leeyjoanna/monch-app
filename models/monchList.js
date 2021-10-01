const mongoose = require('mongoose')

const monchListSchema = new mongoose.Schema({
  url: String,
  title: String,
  date: Date,
})

module.exports = mongoose.model('MonchList', monchListSchema)

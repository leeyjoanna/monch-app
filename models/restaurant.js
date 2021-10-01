const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
  restaurant_id: String,
  url_id: String,
  votes: Array
})

module.exports = mongoose.model('Restaurant', restaurantSchema)
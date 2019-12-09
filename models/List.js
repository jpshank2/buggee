const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ListItemSchema = new Schema({
    type: String
})

const ListSchema = new Schema({ 
  Ingredients: {
    type: [ListItemSchema],
    required: true
  }
})

module.exports = List = mongoose.model('list', ListSchema)
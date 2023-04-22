const mongoose = require('mongoose')

// instanciamos o Schema, um objeto do namespace mongoose. Assim como fazemos com Express. 
const Schema = mongoose.Schema


// modelo do nosso schema de fato e exportamos um model pelo mongoose.
const schema = new Schema({
  name: {
    type: String,
    required: true 
  },
  vocational: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Personal', schema)
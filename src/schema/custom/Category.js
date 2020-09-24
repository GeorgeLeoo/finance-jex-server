// Auto build by build/index.js
  
const db = require('../../db/conn')
const Schema = db.Schema
const JexSchema = new Schema({
  text: {
    type: String
  },
  icon: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users"
  },
  type: {
    type: String
  }
})
module.exports = db.model('Categories', JexSchema)

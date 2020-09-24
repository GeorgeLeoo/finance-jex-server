// Auto build by build/index.js
  
const db = require('../../db/conn')
const Schema = db.Schema
const JexSchema = new Schema({
  iconSelectedId: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  },
  date: {
    type: String
  },
  week: {
    type: String
  },
  money: {
    type: String
  },
  note: {
    type: String
  },
  type: {
    type: String
  }
})
module.exports = db.model('Bills', JexSchema)

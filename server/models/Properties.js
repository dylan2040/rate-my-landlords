const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId

const options = {
  timestamps: true, 
  createdAt: "created_at", 
  updatedAt: "updated_at"
}


const PropertiesSchema = new mongoose.model({
  landlord: ObjectId, 
  address: {
    streetAddress1: String, 
    streetAddress2: String, 
    city: String, 
    state: String, 
    zipcode: String,
  }, 
  management: ObjectId, 
  type: String, 
  cleanliness: Number, 
  neighborsVibes: {type: Array, "default": []}, 
  propertyIssues: {type: Array, "default": []}, 
  noiseLevelRating: Number, 
  reviews: {type: Array, "default": []}, 
}, options)
module.exports = mongoose.model('Properties', PropertiesSchema)
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const options = {
  timestamps: true, 
  createdAt: "created_at", 
  updatedAt: "updated_at"
}

const ReviewsSchema = new mongoose.Schema({
  reviewedBy: ObjectId, 
  landlordReview: {
    wouldRentAgain: Boolean, 
    friendlinessRating: Number, 
    communicationRating: Number, 
    responsivenessRating: Number, 
    maintenanceRating: Number, 
    transactionIssues: true
  }, 
  propertyReview: {
    moveInDate: Date, 
    moveOutDate: Date, 
    cleanlines: Number, 
    neighborsVibes: {type: Array, "default": []}, 
    propertyIssues: {type: Array, "default": []}, 
    noiseLevelRating: Number,
  }
}, options)

module.exports = mongoose.model('Reviews', ReviewsSchema)
const mongoose = require('mongoose')

const hiscoreSchema = mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  totalFish: { type: Number, required: true },
  largestFish: { type: Number, required: true, unique: true },
  largestFishMap: { type: String, required: true },
})

const Hiscore = mongoose.model('Hiscore', hiscoreSchema)

module.exports = { Hiscore }

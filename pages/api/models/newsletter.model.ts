import mongoose from 'mongoose'

const newsletterModel = new mongoose.Schema({
  email: String,
})

export default mongoose.models.Newsletter || mongoose.model('Newsletter', newsletterModel);
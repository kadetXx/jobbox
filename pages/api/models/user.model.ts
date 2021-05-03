import mongoose from 'mongoose'

const userModel = new mongoose.Schema({
  uid: String,
  firstName: String,
  lastName: String,
  email: String,
  accountType: String,
  isEmailVerified: Boolean
})

export default mongoose.models.User || mongoose.model('User', userModel);
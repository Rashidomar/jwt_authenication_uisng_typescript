const mongoose = require('mongoose')

const server = '127.0.0.1:27017' // REPLACE WITH YOUR OWN SERVER :27017
const database = 'typescript'          // REPLACE WITH YOUR OWN DB NAME

export const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://${server}/${database}`)
    console.log('MongoDB connected!!')
  } catch (err) {
    console.log('Failed to connect to MongoDB', err)
  }
}


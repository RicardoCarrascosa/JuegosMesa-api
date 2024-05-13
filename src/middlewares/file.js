const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'BoardGames',
    allowedFormats: ['jpg', 'png', 'jpeg', 'gif']
  }
})
console.log('jiioo')

const uploadSingle = multer({ storage }).single('image')
module.exports = { uploadSingle }

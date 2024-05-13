const cloudinary = require('cloudinary').v2

const deleteFile = (imgUrl) => {
  console.log(imgUrl)
  const imgSplited = imgUrl.split('/')
  const folderName = imgSplited.at(-2)
  const fieldName = imgSplited.at(-1).split('.')
  const public_id = `${folderName}/${fieldName[0]}`
  console.log(public_id)
  cloudinary.uploader.destroy(public_id, () => {
    console.log('Imagen Borrada')
  })
}

module.exports = { deleteFile }

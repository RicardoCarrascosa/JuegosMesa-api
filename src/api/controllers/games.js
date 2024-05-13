const { Game } = require('../models/games.js')
const { deleteFile } = require('../../utils/deleteFile.js')
// GET
const getGame = async (req, res, next) => {
  try {
    const games = await Game.find()
    return res.status(200).json(games)
  } catch (error) {
    return res.status(400).json(['Error while GETTING a BoardGame', error])
  }
}
// GET
const getGameByID = async (req, res, next) => {
  try {
    const { id } = req.params
    const games = await Game.findById(id)
    return res.status(200).json(games)
  } catch (error) {
    return res.status(400).json(['Error while GETTING a BoardGame', error])
  }
}

// POST
const createGame = async (req, res, next) => {
  try {
    // Check for duplicates:
    if (await Game.findOne({ name: req.body.name })) {
      return res.status(400).json(['BoardGame Already Exists', req.body])
    }
    const newGame = new Game({
      name: req.body.name,
      img: req.body.img,
      price: req.body.price,
      category: req.body.category
    })
    if (req.file) {
      newGame.img = req.file.path
    }
    const gameSaved = await newGame.save()
    return res.status(201).json(gameSaved)
  } catch (error) {
    return res.status(400).json(['Error while CREATING a BoardGame', error])
  }
}

// Update
const updateGame = async (req, res, next) => {
  try {
    const { id } = req.params
    const newGame = new Game(req.body)
    if (req.file) {
      newGame.img = req.file.path
      const oldGame = await Game.findById(id)
      deleteFile(oldGame.img)
    }

    newGame._id = id
    const updateGame = await Game.findByIdAndUpdate(id, newGame, { new: true })
    return res.status(200).json(updateGame)
  } catch (error) {
    return res.status(400).json(['Error while UPDATING a Boardame', error])
  }
}

//Delete
const deleteGame = async (req, res, next) => {
  try {
    const { id } = req.params
    const delGame = await Game.findByIdAndDelete(id)
    console.log('hola')
    console.log(delGame.img)
    deleteFile(delGame.img)
    return res.status(200).json(delGame)
  } catch (error) {
    return res.status(400).json(['Error while DELETING a Game', error])
  }
}

module.exports = { getGame, getGameByID, createGame, updateGame, deleteGame }

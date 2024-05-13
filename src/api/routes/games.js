const {
  getGame,
  getGameByID,
  createGame,
  updateGame,
  deleteGame
} = require('../controllers/games.js')
const { uploadSingle } = require('../../middlewares/file.js')
const gameRoutes = require('express').Router()

console.log('joo')
gameRoutes.get('/', getGame)
gameRoutes.get('/:id', getGameByID)
gameRoutes.post('/', uploadSingle, createGame)
gameRoutes.put('/:id', uploadSingle, updateGame)
gameRoutes.delete('/:id', deleteGame)

module.exports = { gameRoutes }

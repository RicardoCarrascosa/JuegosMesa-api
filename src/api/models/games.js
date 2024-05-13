const mongoose = require('mongoose')

const gameSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
      type: String,
      required: true,
      enum: ['DeckBuilder', 'Battleship', 'Party', 'Resources', 'Champain', 'AreaControl']
    }
  },
  {
    timestamps: true,
    collecton: 'games'
  }
)

const Game = mongoose.model('games', gameSchema, 'games')

module.exports = { Game }

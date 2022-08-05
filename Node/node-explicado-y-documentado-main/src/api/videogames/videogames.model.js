const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const videogameSchema = new Schema(
  {
    name: { type: String, required: true },
    genre: { type: String, default: 'Unknown' },
    year: { type: Number },
    platform: [{ type: String, enum: ['playstation', 'xbox', 'pc', 'nintendo'], required: true }],
    company: { type: String },
    deprecated: { type: Boolean, required: false },
    price: { type: Number },
  },
  {
    timestamps: true,
  }
);

const VideoGame = mongoose.model('VideoGame', videogameSchema); //****REF DEL MODELO CUANDO LO LLAMAMOS EN OTRO MODELO */

module.exports = VideoGame;

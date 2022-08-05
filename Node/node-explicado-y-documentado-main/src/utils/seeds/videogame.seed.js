const mongoose = require('mongoose');
const db = require('../database/db');
const VideoGame = require('../../api/videogames/videogames.model');

const initialGames = [
  {
    name: 'Call Of Duty',
    genre: 'Shooter',
    year: 2018,
    platform: ['playstation', 'xbox'],
    company: 'Activision Blizzard',
    deprecated: false,
    price: 69.99,
  },
  {
    name: 'League of Legends',
    genre: 'Moba',
    platform: ['pc'],
    company: 'RIOT Games',
    deprecated: false,
  },
  {
    name: 'Age of Empires',
    genre: 'Strategy',
    year: 1997,
    platform: ['pc'],
    company: 'Empire Constructors',
    deprecated: false,
    price: 2,
  },
  {
    name: 'Street Fighter',
    genre: 'Fighting',
    year: 1992,
    platform: ['nintendo'],
    company: 'Sega',
    deprecated: true,
    price: 14,
  },
  {
    name: 'Final Fantasy',
    genre: 'Role',
    year: 2016,
    platform: ['playstation'],
    company: 'Square-enix',
    deprecated: false,
    price: 30,
  },
];

console.log('Ejecutando seed en', db.DB_URL);

mongoose
  .connect(db.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allGames = await VideoGame.find();

    if (allGames.length) {
      console.log('Eliminando colección de games...');
      await VideoGame.collection.drop();
    } else {
      console.log('No hay juegos en la base de datos... procediendo a añadir los juegos');
    }
  })
  .catch(error => console.log('Error al borrar la colección de la base de datos', error))
  .then(async () => {
    await VideoGame.insertMany(initialGames);
    console.log('Juegos añadidos con éxito...');
  })
  .catch(error => console.log('Error al añadir juegos a la base de datos', error))
  .finally(() => mongoose.disconnect());

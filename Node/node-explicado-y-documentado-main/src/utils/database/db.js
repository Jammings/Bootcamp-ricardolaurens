const dotenv = require('dotenv');

// Nos hace de puente entre mongodb y nuestro servidor.
// Nos da una serie de funciones que simplifican operaciones de
// lectura y escritura en mongodb.
const mongoose = require('mongoose');
dotenv.config();

// Como nuestra base de datos tendrá credenciales cuando usemos 
// la de mongo atlass, para no exponerla ni subirla a github,
// la metemos en el .env, de esa manera solo yo en mi ordenador podré
// leerla y acceder a ella.
const DB_URL = process.env.DB_URL;

const connect = async () => {
  try {
    const db = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = db.connection;
    console.log(`Conectado con éxito a la base de datos ${name} en host: ${host}`);
  } catch (error) {
    console.log('Error conectando a la base de datos', error);
  }
}

module.exports = { connect, DB_URL };
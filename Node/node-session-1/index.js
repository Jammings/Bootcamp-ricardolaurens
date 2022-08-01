// Primeros pasos para iniciar el servidor
/* 
1.  npm init -y
2. npm install express
3. crear archivo index.js 
*/


const { request } = require('express');
const express = require('express');

const PORT = 4000;
const app = express();

// Creamos un router para express
const router = express.Router();

// Configuramos una ruta, en este caso "/" equivale a http://localhost:4000
router.get('/', (request, response) => {
  return  response.send('Hola mundo! Nuestro servidor funciona')
});

// endpoint -> cada ruta de nuestro servidor
router.get('/movies', (request, response) => {
    const movies = ['El Padrino', 'Gladiador', 'Harry Potter', 'Avengers', 'Scarface', '300', 'Troya']
    return response.send(movies)
})

router.get('/movies/:pelicula', (req, res) => {
// Programaeremos esta ruta de manera que se puedan buscar peliculas individualmente.
// Si el usuario ubusca /movies/titanic -> le diremos que no existen en nuestro catalogo
// Si el usuario busca /movies/gladiator -> le diremos que si existe
const movies = ['El Padrino', 'Gladiator', 'Harry Potter', 'Avengers', 'Scarface', '300', 'Troya']    
const pelicula = req.params.pelicula;

const finded = movies.find(movie => pelicula.toLocaleLowerCase() === movie.toLocaleLowerCase());

if (finded) {
    return res.send(`Pelicula encontrada, aqui la tienes: ${finded}`);
} else {
    return res.send(`No tenemos la pelicula que buscas. ${pelicula} no esta en nuestra coleccion.`);
}
});
// npm i -D nodemon para instalar nodemon
//npm run dev para ejecutar el nuevo script "dev"
// Le decimos a express que use nuestro router
app.use('/', router)

// Creamos nuestro servidor
app.listen(PORT, ()=> {
    console.log(`Server running in http:/localhost:,${PORT}`)
});
/**
 * La finalidad del servidor es proveer los datos
 * que pueda necesitar un front-end o cualquier otro
 * consumidor (app, aplicación de escritorio etc..)
 * 
 * El back será el encargado de comunicarse con la base de datos.
 */

// Express: Framework que nos ofrece una serie de funciones y herramientas para hacernos
// la tarea de crear y gestionar un servidor de manera sencilla.
const express = require('express');

const db = require('./src/utils/database/db');
// Existen variables que no queremos que estén visibles en nuestro código.
// dotenv nos permite "ocultar" esas variables para dejarlas fuera del alcance de 
// cualquier persona no autorizada.
const dotenv = require('dotenv');

// controla que las peticiones que lleguen al servidor sean legítimas
// por ejemplo, con cors podríamos restringir que nuestro servidor
// solamente acepte peticiones de nuestro front (miejemplo.com)
const cors = require('cors');

// Nos ayuda a gestionar el registro y login de usuarios.
const passport = require('passport');

// Con este require, estaríamos ejecutando el contenido del archivo que requerimos.
require('./src/utils/auth/index');

// Se encarga de mantener una sesión (leerla desde la cookie)
// y grabar la cookie de vuelta para el usuario
const session = require('express-session');

// MongoStore guarda en base de datos la sesión generada por express-session.
// Si no la guardásemos, cada vez que se reinicia el servidor, se perderían
// todos los usuarios con sesiones iniciadas.
const MongoStore = require('connect-mongo');

// Routers o rutas de cada parte de nuestra aplicación.
const mainRoutes = require('./src/api/main/main.routes');
const userRoutes = require('./src/api/users/user.routes');
const videogamesRoutes = require('./src/api/videogames/videogames.routes');
const storeRoutes = require('./src/api/store/store.routes');

// En este punto, importamos las variables de entorno (.env)
// A partir de aquí, podremos acceder a process.env.DB_URL
dotenv.config();

// Ejecutamos la función que nosotros mismos hemos creado.
// Conectaremos con la base de datos para poder realizar operaciones en ella
// cuando sea necesario por parte de nuestro servidor.
db.connect();

const PORT = process.env.PORT || 4000;

// creamos nuestra instancia de express.
const app = express();

// Si el servidor recibe una petición POST/PUT que ha sido enviada en 
// formato json, express.json() se encarga de leer estos datos y meterlos
// en req.body. De manera que req.body = {...}
app.use(express.json());

// Si el servidor recibe una petición POST/PUT que ha sido enviada en 
// formato form-urlencoded, express.urlencoded() se encarga de leer estos datos y meterlos
// en req.body. De manera que req.body = {...}
app.use(express.urlencoded({extended: true}));

// Configuramos headers de respuesta. En ellos, le mandamos al usuario las opciones
// que le vamos a permitir para cuando nos haga una llamada.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Por seguridad, para garantizar que una petición es legítima
// enviada por un front autorizado, se configura cors.
app.use(cors({ origin: ['*'], credentials: true }))

// Configuramos express-session. Duración de la cookie
// clave secreta para desencriptar la cookie de sesión
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 5 * 60 * 1000,
  },
  store: MongoStore.create({ mongoUrl: db.DB_URL })
}));

// Después de haber configurado passport, en esta línea
// lo ejecutamos y a partir de aquí estará activo en nuestro servidor.
app.use(passport.initialize());

// Aquí le decimos a passport que nos ayude a rescatar el usuario
// que venía dentro de la sesión. Passport lo mete dentro de req.user
app.use(passport.session());

// Le decimos a express, que rutas queremos asociar a cada uno
// de nuestros routers. De manera que cuando nos entre una petición,
// express buscará la coincidencia y desviará la petición si coincide
// ej. http://localhost:4000/users/register
app.use('/', mainRoutes);
app.use('/users', userRoutes);
app.use('/videogames', videogamesRoutes);
app.use('/store', storeRoutes);

// Ruta no encontrada
// Si no hace match con ninguna ruta, entrará aquí. 
// Porque el asterisco, hace match con cualquier ruta recibida.
app.use('*', (req, res, next) => {
  return res.status(404).json("Route not found");
});

// Gestor de errores global de nuestra aplicación
// En cualquier controlador, enviaremos el error hacia esta función con
// next(error);
app.use((error, req, res) => {
  return res.status(error.status || 500).json(error.message || "Unexpected error");
});

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});

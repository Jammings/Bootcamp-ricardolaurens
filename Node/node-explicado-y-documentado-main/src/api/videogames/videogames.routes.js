const express = require('express');
const { isAuthenticated } = require('../../utils/middlewares/auth.middleware');

const router = express.Router();

const {getAllVideogames, getVideoGame, postVideogame, putVideogame, deleteVideogame} = require('./videogames.controller');

router.get('/', getAllVideogames);
router.get('/:id', [isAuthenticated], getVideoGame);
router.post('/new', postVideogame)
router.put('/edit/:id', putVideogame)
router.delete('/delete/:id', [isAuthenticated], deleteVideogame);

module.exports = router;
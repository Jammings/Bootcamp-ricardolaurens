const VideoGame = require('./videogames.model');


const getAllVideogames = async (req, res, next) => {
    try {
        const allVideogames = await VideoGame.find();
        return res.status(200).json(allVideogames);
    } catch (error) {
        return next(error);
    }
}

const getVideoGame = async (req, res, next) => {
    try {
        const id = req.params.id;
        const game = await VideoGame.findById(id);
        if (game) {
            return res.status(200).json(game);
        }else{
            return res.status(404).json('juego no encontrado');
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}


const postVideogame = async (req, res, next) => {
    try {
        const newVideogame = new VideoGame(req.body); //creamos objeto de tipo videogame
        // newVideogame.name = req.body.name
        // newVideogame.genre = req.body.genre
        // newVideogame.year = req.body.year
        // ..... así con el resizeTo, pero podemos pasar req.body al constructor de VideoGame

        const createdVideoGame = await newVideogame.save();
        return res.status(201).json(createdVideoGame);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putVideogame = async (req, res, next) => {
    try {
        console.log(req.params.id);
        const id = req.params.id;
        const videogame = new VideoGame(req.body);
        videogame._id = id;   //cambiamos el id al nuevo objeto para actualizar el que genera por el suyo
        console.log(videogame);
        const updatedVideoGame = await VideoGame.findByIdAndUpdate(id, videogame);
        return res.status(200).json(updatedVideoGame);
    } catch (error) {
        return res.status(500).json(error);
    }
}


const deleteVideogame = async (req, res, next) => {
    try {
        const id = req.params.id;
        const gameDb = await VideoGame.findByIdAndDelete(id);
        return res.status(200).json(gameDb);
    } catch (error) {
        return res.status(500).json(error);
    }
}


module.exports = {getAllVideogames, getVideoGame, postVideogame, putVideogame, deleteVideogame}
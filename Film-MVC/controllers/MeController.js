const Film = require("../models/Films");

class MeController {

    // [GET] /me/stored/films
    storedFilms(req, res, next){
        Film.find({})
            .then(films => res.render("my-films", {films}))
            .catch(next);
    }

}

module.exports = new MeController;
const Film = require("../models/Films");

class MeController {

    // [GET] /me/stored/films
    storedFilms(req, res, next){

        Promise.all([Film.find({}), Film.countDocumentsDeleted()])
            .then(([films, deletedCount]) => 
                res.render("my-films", {
                    deletedCount,
                    films
                })
            )
            .catch(next);

        // Film.countDocumentsDeleted()
        //     .then((deletedCount) => {
        //         console.log(deletedCount)
        //     })
        //     .catch(() => {});

        // Film.find({})
        //     .then(films => res.render("my-films", {films}))
        //     .catch(next);
    }

    // [GET] /me/trash/films
    trashFilms(req, res, next){
        Film.findDeleted({})
            .then(films => res.render("trash-films", {films}))
            .catch(next);
    }

}

module.exports = new MeController;
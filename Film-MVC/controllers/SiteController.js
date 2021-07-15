const Film = require("../models/Films");

class SiteController {
    
    // [GET] /
    index(req, res, next){
        Film.find({})
        .then(films => res.render("home", {
            films: films
        }))
        .catch(next);
    }

    search(req, res, next){
        var key = req.query.key;
        

        Film.find({"title": {'$regex': key, '$options' : 'i'}})
            .then(films => res.render("search-film", {films}))
            .catch(next);
    }
}

module.exports = new SiteController;
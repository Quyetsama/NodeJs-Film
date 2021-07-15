const Film = require("../models/Films");

class FilmController {
    
    // [GET] /films/:slug/:episode
    playfilm(req, res, next){
        Film.findOne({slug: req.params.slug})
            .then(film => {
                console.log(film);
                res.render("playfilm",{
                    film: film,
                    episode: parseInt(req.params.episode)
                });
            })
    }

    // [GET] /films/create
    create(req, res, next){
        res.render("createfilm");
    }

    // [POST] /films/store
    store(req, res, next){
        const formData = {
            category: req.body.category,
            episodes: [
              {
                episode: "null",
                url: "null",
                type: "iframe"
              }
            ],
            imageUrl: req.body.imageurl,
            title: req.body.title
        }

        const film = new Film(formData);
        film.save()
            .then(() => res.redirect("/"))
            .catch(error => {
                // để sau
            });
    }

    // [GET] /films/:id/edit
    edit(req, res, next){
        Film.findById(req.params.id)
            .then(film => res.render("editfilm", {film}))
            .catch(next);
    }

    // [POST] /films/:id/update
    update(req, res, next){
        var id = req.params.id;
        console.log(id);
        console.log(req.body.episode);

        var listEpi = [];

        for(var i=0; i<req.body.episode.length - 1;i++){

            if(req.body.episode[i] == ""){
                req.body.episode[i] = "null";
            }

            listEpi.push({
            "episode": (i+1).toString(),
            "url": req.body.episode[i],
            "type": "iframe"
            });
        }

        if(req.body.episode[req.body.episode.length-1] != null && req.body.episode[req.body.episode.length-1]){
            listEpi.push({
                "episode": (req.body.episode.length).toString(),
                "url": req.body.episode[req.body.episode.length-1],
                "type": "iframe"
            });
        }
        console.log(listEpi);

        Film.updateOne({_id: id}, {
            category: req.body.category,
            episodes: listEpi,
            imageUrl: req.body.imageurl,
            title: req.body.title
        })
            .then(() => res.redirect("/me/stored/films"))
            .catch(next);
    }

    // [POST] /films/:id/delete
    delete(req, res, next){
        Film.deleteOne({ _id: req.params.id })
            .then(() => res.redirect("back"))
            .catch(next);
    }

}

module.exports = new FilmController;
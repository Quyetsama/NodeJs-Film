
class NewControllers {
    
    index(req, res){
        res.send("news");
    }

    show(req, res){
        res.send(req.params.slug);
    }
}

module.exports = new NewControllers;
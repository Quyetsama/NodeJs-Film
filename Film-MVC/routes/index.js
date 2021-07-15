const newsRouter = require("./news");
const meRouter = require("./me");
const filmsRouter = require("./films");
const siteRouter = require("./site");

function route(app){

    app.use("/news", newsRouter);

    app.use("/me", meRouter);

    app.use("/films", filmsRouter);

    app.use("/", siteRouter);

    

    // app.get("/news", function(req, res){
    //     res.render("home");
    // });

    // app.get("/news", function(req, res){
    //     res.send("NEW PAGE");
    // });

}

module.exports =  route;
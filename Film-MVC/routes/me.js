const express = require("express");
const router = express.Router();

const meControllers = require("../controllers/MeController");

router.get("/stored/films", meControllers.storedFilms);
router.get("/trash/films", meControllers.trashFilms);



module.exports = router;
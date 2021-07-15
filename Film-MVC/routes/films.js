const express = require("express");
const router = express.Router();

const filmControllers = require("../controllers/FilmController");

router.get("/create", filmControllers.create);
router.post("/store", filmControllers.store);
router.post("/:id/update", filmControllers.update);
router.get("/:id/edit", filmControllers.edit);
router.post("/:id/delete", filmControllers.delete);
router.get("/:slug/:episode", filmControllers.playfilm);



module.exports = router;
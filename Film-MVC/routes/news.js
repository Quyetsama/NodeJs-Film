const express = require("express");
const router = express.Router();

const newControllers = require("../controllers/NewController");

router.get("/:slug", newControllers.show);

router.get("/", newControllers.index);




module.exports = router;
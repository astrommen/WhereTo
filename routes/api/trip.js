const router = require("express").Router();
const tripController = require("../../controllers/tripController");

router
.route("/")
.get(tripController.findAll);

module.exports = router;
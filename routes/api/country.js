const router = require("express").Router();
const countryController = require("../../controllers/countryController");

router
.route("/")
.get(countryController.findAll);

module.exports = router;
const router = require("express").Router();
const countryController = require("../../controllers/countryController");

router.route("/")
.get(countryController.findAll)
.post(countryController.create)

router.route("/:id")
.delete(countryController.remove);

module.exports = router;
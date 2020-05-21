const router = require("express").Router();
const tripController = require("../../controllers/tripController");

router.route("/")
.get(tripController.findAll)
.post(tripController.create)

router.route("/:id")
.delete(tripController.remove);

module.exports = router;
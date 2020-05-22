const router = require("express").Router();
const walkController = require("../../controllers/walkController");

router.route("/")
.get(walkController.findAll)
.post(walkController.create)

router.route("/:id")
.delete(walkController.remove);

module.exports = router;  
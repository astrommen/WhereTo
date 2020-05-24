const router = require("express").Router();
const walkController = require("../../controllers/walkController");

router.route("/")
.get(walkController.findAll)
.post(walkController.create);

router.route("/:id")
.get(walkController.findById)
.put(walkController.update)
.delete(walkController.remove);

module.exports = router;  
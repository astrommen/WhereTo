const router = require("express").Router();
const triposoController = require("../../controllers/triposoController");

router.route("/")
.get(triposoController.findAll)
.post(triposoController.create)

router.route("/:id")
.delete(triposoController.remove);

module.exports = router;
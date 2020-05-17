const router = require("express").Router();
const triposoController = require("../../controllers/triposoController");

router
.route("/")
.get(triposoController.findAll);

module.exports = router;
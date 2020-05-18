const router = require("express").Router();
const walkController = require("../../controllers/walkController");

router
.route("/")
.get(walkController.findAll);

module.exports = router;  
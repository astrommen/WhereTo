const router = require("express").Router();
const ribdController = require("../../controllers/ribdController");

router
.route("/")
.get(ribdController.findAll);

module.exports = router;
const router = require("express").Router();
const ticketmasterController = require("../../controllers/ticketmasterController");

router
.route("/")
.get(ticketmasterController.findAll);

module.exports = router;
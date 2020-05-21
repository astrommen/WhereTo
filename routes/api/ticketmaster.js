const router = require("express").Router();
const ticketmasterController = require("../../controllers/ticketmasterController");

router.route("/")
.get(ticketmasterController.findAll)
.post(ticketmasterController.create)

router.route("/:id")
.delete(ticketmasterController.remove);

module.exports = router;
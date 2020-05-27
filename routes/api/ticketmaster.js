const router = require("express").Router();
const ticketmasterController = require("../../controllers/ticketmasterController");

router.route("/")
  .get(ticketmasterController.findAll)
  .post(ticketmasterController.create);

router.route("/:id")
  .get(ticketmasterController.findById)
  .put(ticketmasterController.update)
  .delete(ticketmasterController.remove);

// Matches with "/api/ticketmaster/event/:id"
router.route("/event/:id")
  .get(ticketmasterController.findById)
  .put(ticketmasterController.updateEvent)
  .delete(ticketmasterController.remove);


module.exports = router;
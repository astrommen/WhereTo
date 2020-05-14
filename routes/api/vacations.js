const router = require("express").Router();
const vacationsController = require("../../controllers/vacationController");

// Matches with "/api/vacations"
router.route("/")
  .get(vacationsController.findAll)
  .post(vacationsController.create);

// Matches with "/api/vacations/:id"
router
  .route("/:id")
  .get(vacationsController.findById)
  .put(vacationsController.update)
  .delete(vacationsController.remove);

module.exports = router;

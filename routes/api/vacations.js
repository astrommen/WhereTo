const router = require("express").Router();
const vacationController = require("../../controllers/vacationController");

// Matches with "/api/vacations"
router.route("/")
  .get(vacationController.findAll)
  .post(vacationController.create);

// Matches with "/api/vacations/:id"
router
  .route("/:id")
  .get(vacationController.findById)
  .put(vacationController.update)
  .delete(vacationController.remove);

module.exports = router;

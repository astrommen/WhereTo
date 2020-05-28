const router = require("express").Router();
const ribdController = require("../../controllers/ribdController");

// Matches with "/api/ribd
router.route("/")
  .get(ribdController.findAll)
  .post(ribdController.create);

// Matches with "/api/ribd/:id"
router.route("/:id")
  .get(ribdController.findById)
  .put(ribdController.update)
  .delete(ribdController.remove);

// Matches with "/api/ribd/ribd/:id"
router.route("/ribd/:id")
  .get(ribdController.findById)
  .put(ribdController.updateRibd)
  .delete(ribdController.remove);

module.exports = router;
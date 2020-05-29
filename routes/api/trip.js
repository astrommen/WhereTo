const router = require("express").Router();
const tripController = require("../../controllers/tripController");

router.route("/")
.get(tripController.findAll)
.post(tripController.create);

//Matches with "/api/trip/sightseeing/:vacaId/:id"
router.route("/sightseeing/:vacaId/:id")
.get(tripController.findById)
.put(tripController.update)
.delete(tripController.remove);

module.exports = router;
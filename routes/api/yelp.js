const router = require("express").Router();
const yelpController = require("../../controllers/yelpController");

router.route("/")
.get(yelpController.findAll)
.post(yelpController.create);

router.route("/:id")
.get(yelpController.findById)
.put(yelpController.update)
.delete(yelpController.remove);

module.exports = router;
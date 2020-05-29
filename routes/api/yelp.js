const router = require("express").Router();
const yelpController = require("../../controllers/yelpController");

// Matches with "/api/yelp"
router.route("/")
  .get(yelpController.findAll)
  .post(yelpController.create);

// Matches with "/api/yelp/food/:vac/:id"
router.route("/food/:vacId/:id")
  .get(yelpController.findById)
  .put(yelpController.update)
  .delete(yelpController.remove);

// Matches with "/api/yelp/food/:id"
router.route("/food/:id")
  .get(yelpController.findById)
  .put(yelpController.updateFood)
  .delete(yelpController.remove);

module.exports = router;
const router = require("express").Router();
const triposoController = require("../../controllers/triposoController");

router.route("/")
  .get(triposoController.findAll)
  .post(triposoController.create);

router.route("/:id")
.get(triposoController.findById)
.put(triposoController.update)
.delete(triposoController.remove);

module.exports = router;
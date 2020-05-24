const router = require("express").Router();
const ribdController = require("../../controllers/ribdController");

router.route("/")
.get(ribdController.findAll)
.post(ribdController.create);

router.route("/:id")
.delete(ribdController.remove)
.put(ribdController.update)
.delete(ribdController.remove);

module.exports = router;
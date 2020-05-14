const router = require("express").Router();
const userRoutes = require("./users");
const vacationRoutes = require("./vacations");

// User routes
router.use("/users", userRoutes);

// Vacation routes
router.use("/vacations", vacationRoutes);

module.exports = router;

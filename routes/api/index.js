const router = require("express").Router();
const userRoutes = require("./users");
const vacationRoutes = require("./vacations");
const ribdRoutes = require("./ribd");

// User routes
router.use("/users", userRoutes);

// Vacation routes
router.use("/vacations", vacationRoutes);

//RIBD routes
router.use("/ribd", ribdRoutes);

module.exports = router;

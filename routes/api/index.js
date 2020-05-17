const router = require("express").Router();
const userRoutes = require("./users");
const vacationRoutes = require("./vacations");
const ribdRoutes = require("./ribd");
const ticketmasterRoutes = require("./ticketmaster");
const triposoRoutes = require("./triposo");
const yelpRoutes = require("./yelp");
const countryRoutes = require("./country")

// User routes
router.use("/users", userRoutes);

// Vacation routes
router.use("/vacations", vacationRoutes);

//RIBD routes
router.use("/ribd", ribdRoutes);

//Ticketmaster routes
router.use("/ticketmaster", ticketmasterRoutes)

//Triposo routes
router.use("/triposo", triposoRoutes)

//Yelp routes
router.use("/yelp", yelpRoutes)

//Country routes
router.use("/country", countryRoutes)

module.exports = router;

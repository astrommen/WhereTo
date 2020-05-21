const router = require("express").Router();
const userRoutes = require("./users");
const vacationRoutes = require("./vacations");
const countryRoutes = require("./country");
const ribdRoutes = require("./ribd");
const ticketmasterRoutes = require("./ticketmaster");
const tripRoutes = require("./trip");
const triposoRoutes = require("./triposo");
const walkRoutes = require("./walk");
const yelpRoutes = require("./yelp");

// User routes
router.use("/users", userRoutes);

// Vacation routes
router.use("/vacations", vacationRoutes);

//Country routes
router.use("/country", countryRoutes)

//RIBD routes
router.use("/ribd", ribdRoutes);

//Ticketmaster routes
router.use("/ticketmaster", ticketmasterRoutes)

//TripAdvisor routes
router.use("/trip", tripRoutes)

//Triposo API - Day routes
router.use("/triposo", triposoRoutes)

//Yelp routes
router.use("/yelp", yelpRoutes)

//Triposo API - Walk routes
router.use("/walk", walkRoutes)

module.exports = router;

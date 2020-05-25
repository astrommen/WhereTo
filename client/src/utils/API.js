import axios from "axios"

export default {
    //Ticketmaster
    callTicketmasterD: function (sports, concert, theatre, distance, state, dateStart, city, film, family) {
        let array = []
        if (sports) {
            array.push(sports)
        }
        if (concert) {
            array.push(concert)
        }
        if (theatre) {
            array.push(theatre)
        }
        if (film) {
            array.push(film)
        }
        if (family) {
            array.push(family)
        }
        console.log("ARRAY", array)
        return axios.get("/api/ticketmaster", {
            params:
            {
                activity: sports + concert + theatre,
                distance: distance,
                dateStart: dateStart,
                city: city,
                state: state
            }
        })
    },
    //Ticketmaster
    callTicketmasterV: function (concert, sports, theatre, film, family, distance, dateStart, dateEnd, city) {
        return axios.get("/api/ticketmaster", {
            params:
            {
                activity: concert + sports + theatre + film + family,
                distance: distance,
                dateStart: dateStart,
                dateEnd: dateEnd,
                city: city,
            }
        })
    },
    //RIBD
    callRibd: function (state, city, boating, fishing, hiking, beach, camping, swimming) {
        return axios.get("/api/ribd", {
            params: {
                location: city + "," + state,
                activities: boating + fishing + hiking + beach
            }
        })
    },
    //We can add arrival and depature times
    //Search TRIPOSO API Day Planner
    callDayPlanner: function (city, startDate, endDate) {
        return axios.get("/api/triposo", {
            params: {
                city: city,
                startDate: startDate,
                endDate: endDate,
            }
        })
    },
    //Search Yelp for food and drink
    callYelp: function (city, state, breakfast, dinner, dessert, foodType, drinks) {
        console.log("fetching yelp")
        return axios.get("/api/yelp", {
            params: {
                location: city + "," + state,
                term: breakfast + "," + dinner + "," + dessert + "," + foodType + ", " + drinks,
            }
        })
    },
    //Search RestCountries for basic country information
    callCountries: function (country) {
        return axios.get("/api/country", { params: { country: country } })
    },
    //Search Triposo for city walk information
    callTour: function (city) {
        console.log("fetching tour")
        return axios.get("/api/walk", {
            params: {
                city: city
            }
        })
    },
    callTrip: function (location, activity) {
        return axios.get("/api/trip", {
            params: {
                location: location,
                activity: activity
            }
        })
    },
    callCountries: function (country) {
        return axios.get("/api/country", { params: { country: country } })
    },
    getUser: function (id) {
        return axios.get("/api/users/" + id);
    },
    getUsers: function () {
        return axios.get("/api/users")
    },
    getVacations: function (id) {
        return axios.get("/api/vacations/" + id)
    },
    saveTrip: function (tripData) {
        return axios.post("/api/vacations", tripData)
    },
    saveOutdoorArea: function (outdoorData) {
        return axios.post("/api/outdoor", outdoorData)
    },
    returnOutdoorAreas: function () {
        return axios.get("/api/outdoor")
    },
    deleteOutdoorArea: function (id) {
        return axios.delete("/api/outdoor" + id);
    },
    saveCountry: function (countryData) {
        return axios.post("/api/country", countryData)
    },
    returnCountry: function () {
        return axios.get("/api/country")
    },
    deleteCountry: function (id) {
        return axios.delete("/api/country" + id);
    },
    saveFood: function (foodData) {
        return axios.post("/api/food", foodData)
    },
    returnFood: function () {
        return axios.get("/api/food")
    },
    deleteFood: function (id) {
        return axios.delete("/api/food" + id);
    },
    saveEvent: function (eventData) {
        return axios.post("/api/event", eventData)
    },
    returnEvent: function () {
        return axios.get("/api/event")
    },
    deleteEvent: function (id) {
        return axios.delete("/api/event" + id);
    },
    // saveSightseeing: function (sightseeingData) {
    //     return axios.post("/api/sightseeing", sightseeingData)
    // },
    saveSightseeing: function (id, data) {
        return axios.put("/api/vacations/sightseeing/" + id, data)
    },
    returnSightseeing: function () {
        return axios.get("/api/sightseeing")
    },
    deleteSightseeing: function (id) {
        return axios.delete("/api/sightseeing" + id);
    },
    saveWalk: function (sightseeingData) {
        return axios.post("/api/walk", sightseeingData)
    },
    returnWalk: function () {
        return axios.get("/api/walk")
    },
    deleteWalk: function (id) {
        return axios.delete("/api/walk" + id);
    },
    saveDayplan: function (dayplanData) {
        return axios.post("/api/triposo", dayplanData)
    },
    returnDayplan: function () {
        return axios.get("/api/triposo")
    },
    deleteDayplan: function (id) {
        return axios.delete("/api/triposo" + id);
    },
}


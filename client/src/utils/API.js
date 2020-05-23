import axios from "axios"

export default {
    //Ticketmaster
    callTicketmasterD: function (sports, concert, theatre, distance, dateStart, city) {
        return axios.get("/api/ticketmaster", {
            params:
            {
                activity: sports+concert+theatre,
                distance: distance,
                dateStart: dateStart,
                city: city
            }
        })
    },
    //Ticketmaster
    callTicketmasterV: function (activity, distance, dateStart, dateEnd, city) {
        return axios.get("/api/ticketmaster", {
            params:
            {
                activity: activity,
                distance: distance,
                dateStart: dateStart,
                dateEnd: dateEnd,
                city: city
            }
        })
    },
    //RIBD
    callRibd: function (state, city, boating, fishing, hiking, beach) {
        return axios.get("/api/ribd", {
            params: {
                location: city+","+state,
                activities: boating+fishing+hiking+beach
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
                endDate: endDate
            }
        })
    },
    //Search Yelp for food and drink
    callYelp: function (city, state, breakfast, dinner, dessert, drinks, foodType) {
        return axios.get("/api/yelp", {
            params: {
                location: city+","+state,
                term: breakfast+","+dinner+","+dessert+","+drinks,
                categories: foodType
            }
        })
    },
    //Search RestCountries for basic country information
    callCountries: function (country) {
        return axios.get("/api/country", { params: { country: country } })
    },
    //Search Triposo for city walk information
    callTour: function(city) {
        return axios.get("/api/walk", {
            params: {
                city: city
            }
        })
    },
    callTrip: function(location, activity) {
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
    saveOutdoorArea: function(outdoorData) {
        return axios.post("/api/ribd", outdoorData)
    },
    returnOutdoorAreas: function() {
        return axios.get("/api/ribd")
    },
    deleteOutdoorArea: function(id) {
        return axios.delete("/api/ribd" + id);
    },
    saveCountry: function(countryData) {
        return axios.post("/api/country", countryData)
    },
    returnCountry: function() {
        return axios.get("/api/country")
    },
    deleteCountry: function(id) {
        return axios.delete("/api/country" + id);
    },
    saveFood: function(foodData) {
        return axios.post("/api/yelp", foodData)
    },
    returnFood: function() {
        return axios.get("/api/yelp")
    },
    deleteFood: function(id) {
        return axios.delete("/api/yelp" + id);
    },
    saveEvent: function(eventData) {
        return axios.post("/api/ticketmaster", eventData)
    },
    returnEvent: function() {
        return axios.get("/api/ticketmaster")
    },
    deleteEvent: function(id) {
        return axios.delete("/api/ticketmaster" + id);
    },
    saveSightseeing: function(sightseeingData) {
        return axios.post("/api/trip", sightseeingData)
    },
    returnSightseeing: function() {
        return axios.get("/api/trip")
    },
    deleteSightseeing: function(id) {
        return axios.delete("/api/trip" + id);
    },
    saveWalk: function(sightseeingData) {
        return axios.post("/api/walk", sightseeingData)
    },
    returnWalk: function() {
        return axios.get("/api/walk")
    },
    deleteWalk: function(id) {
        return axios.delete("/api/walk" + id);
    },
    saveDayplan: function(dayplanData) {
        return axios.post("/api/triposo", dayplanData)
    },
    returnDayplan: function() {
        return axios.get("/api/triposo")
    },
    deleteDayplan: function(id) {
        return axios.delete("/api/triposo" + id);
    },
}


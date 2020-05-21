import axios from "axios"

export default {
    //Ticketmaster
    callTicketmaster: function (activity, distance, dateStart, dateEnd, city) {
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
    callRibd: function (state, activities) {
        return axios.get("/api/ribd", {
            params: {
                state: state,
                activities: activities
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
    callYelp: function (location, meal) {
        return axios.get("/api/yelp", {
            params: {
                location: location,
                meal: meal
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
    }

}

// export default {
//     saveEvent: function (eventData) {
//         return axios.post("/api/trips", eventData);
//     },
//     saveSite: function(siteData) {
//         return axios.post("/api/trips", siteData)
//     },
//     savePlan: function(planData) {
//         return axios.post("/api/trips", planData)
//     }
// }

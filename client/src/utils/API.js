import axios from "axios"

export default{
    //Ticketmaster
    callTicketmaster: function(activity, distance, dateStart, dateEnd, city) {
        return axios.get("/api/ticketmaster", { params: 
        {
            activity: activity,
            distance: distance,
            dateStart: dateStart,
            dateEnd: dateEnd,
            city: city
        }})
    },
    //RIBD
    callRibd: function(state, activities) {
        return axios.get("/api/ribd", { params: {
            state: state,
            activities: activities 
        }})
    },
    //We can add arrival and depature times
    //Search TRIPOSO API Day Planner
    callDayPlanner: function(city, startDate, endDate) {
        return axios.get("/api/triposo", {params: {
            city: city, 
            startDate: startDate, 
            endDate: endDate
        }})
    }, 
    //Search Yelp for food and drink
    callYelp: function(location, meal) {
        return axios.get("/api/yelp", {params: {
            location: location,
            meal: meal
        }})
    },
    //Search RestCountries for basic country information
    callCountries: function(country) {
        return axios.get("/api/country", {params: {country: country}})
    },
    //Search Triposo for city walk information
    callTour: function(city) {
        return axios.get("/api/walk", {params: {city: city}})
    }
}

// export default {
//     //Search TRIPOSO API for sightseeing information of a specific location
//     callSightseeing: function(city) {
//         return axios.get(`https://www.triposo.com/api/20200405/poi.json?location_id=${city}&tag_labels=sightseeing&bookable=1&fields=id,name,score,intro,booking_info&order_by=-score&account=${process.env.REACT_APP_TP_ID}&token=${process.env.REACT_APP_TP_TOKEN}`)
//     }, 
//     //Search TRIPOSO locate cities in a country of interest -- list attractions/known for
//     callTriposoCities: function(country) {
//         return axios.get(`https://www.triposo.com/api/20200405/location.json?part_of=${country}&tag_labels=city&count=10&fields=id,name,score,snippet&order_by=-score&account=${process.env.REACT_APP_TP_ID}&token=${process.env.REACT_APP_TP_TOKEN}`)
//     },
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


  //EXAMPLES
  // Gets all books
  // getBooks: function () {
  //   return axios.get("/api/books");
  // },
  // // Gets the book with the given id
  // getBook: function (id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function (id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function (bookData) {
  //   return axios.post("/api/books", bookData);
  // },
  // //Searches for a book via Google Books API
  // searchBook: function (bookdata) {
  //   return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookdata}&key=${process.env.REACT_APP_API_KEY}`)
  // }



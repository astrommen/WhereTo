import axios from "axios"

export default {
    //Search TRIPOSO API for sightseeing information of a specific location
    callSightseeing: function(location) {
        return axios.get(`https://www.triposo.com/api/20200405/poi.json?location_id=${location}&tag_labels=sightseeing&bookable=1&fields=id,name,score,intro,booking_info&order_by=-score&account=${process.env.REACT_APP_TP_ID}&token=${process.env.REACT_APP_TP_TOKEN}`)
    },
    //Search TRIPOSO API Day Planner
    callDayPlanner: function(location, startDate, endDate) {
        return axios.get(`https://www.triposo.com/api/20200405/day_planner.json?location_id=${location}&start_date=${startDate}&end_date=${endDate}&account=${process.env.REACT_APP_TP_ID}&token=${process.env.REACT_APP_TP_TOKEN}`)
    }, 
    //Search TRIPOSO locate cities in a country of interest -- list attractions/known for
    callTriposoCities: function(country) {
        return axios.get(`https://www.triposo.com/api/20200405/location.json?part_of=${country}&tag_labels=city&count=10&fields=id,name,score,snippet&order_by=-score&account=${process.env.REACT_APP_TP_ID}&token=${process.env.REACT_APP_TP_TOKEN}`)
    },
    //Search Ticketmaster
    callTicketmaster: function(activity, distance, dateStart, dateEnd, city) {
        return axios.get(`https://app.ticketmaster.com/discovery/v2/events?classificationName=${activity}&radius=${distance}&unit=miles&startDateTime=${dateStart}T00:00:00Z&endDateTime=${dateEnd}T00:00:00Z&city=${city}&apikey=${process.env.REACT_APP_TM_APIKEY}`)
    },
    //Search RIBD for outdoor activities in US
    callRibd: function(state, activities) {
        return axios.get(`https://ridb.recreation.gov/api/v1/recareas?limit=10&offset=0&full=true&state=${state}&activity=${activities}&lastupdated=10-01-2018&sort=Name&apikey=${process.env.REACT_APP_RIBD_APIKEY}`)
    }
}


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



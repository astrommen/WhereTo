import axios from "axios"
import {TP_ID, TP_TOKEN, TM_APIKEY, RIBD_APIKEY } from 'react-native-dotenv'

export default {
    //Search TRIPOSO API for sightseeing information of a specific location
    callSightseeing: function(query) {
        let url = "https://www.triposo.com/api/20200405/location_id=poi.json?" + location + "&tag_labels=sightseeing&bookable=1&fields=id,name,score,intro,booking_info&order_by=-score" + TP_ID + TP_TOKEN
        console.log("sightseeing URL: " + url)
        return axios.get(url)
    },
    //Search TRIPOSO API Day Planner
    callDayPlanner: function(query) {
        let url = "https://www.triposo.com/api/20200405/day_planner.json?location_id=" + location + "&start_date="+ startDate + "&end_date=" + endDate + TP_ID + TP_TOKEN
        console.log("Day Planner URL: " + url)
        return axios.get(url)
    }, 
    //Search TRIPOSO locate cities in a country of interest -- list attractions/known for
    callTriposoCities: function(query) {
        let url = "https://www.triposo.com/api/20200405/location.json?part_of=" + country + "&tag_labels=city&count=10&fields=id,name,score,snippet&order_by=-score" + TP_ID + TP_TOKEN
        console.log("Day Planner URL: " + url)
        return axios.get(url)
    },
    //Search Ticketmaster
    callTicketmaster: function(query) {
        let url = "https://app.ticketmaster.com/discovery/v2/events?classificationName=" + query + "&radius=" + distance + "&unit=miles&startDateTime=" + dateStart + "T00:00:00Z&endDateTime=" + dateEnd + "T00:00:00Z&city=" + location + TM_APIKEY
        console.log("Day Planner URL: " + url)
        return axios.get(url)
    },
    //Search RIBD for outdoor activities in US
    callRibd: function(query) {
        let url = "https://ridb.recreation.gov/api/v1/recareas?limit=10&offset=0&full=true&state=" + state + "&activity=" + activities + "&lastupdated=10-01-2018&sort=Name&apikey=" + RIBD_APIKEY
    }
}
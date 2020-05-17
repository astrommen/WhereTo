const axios = require("axios"); 

module.exports = {
    findAll: function(req, res) {
        const {query: params} = req;
        let url=`https://www.triposo.com/api/20200405/day_planner.json?location_id=${params.city}&start_date=${params.startDate}&end_date=${params.endDate}&account=${process.env.REACT_APP_TP_ID}&token=${process.env.REACT_APP_TP_TOKEN}`
        console.log(url)
        axios
        .get(url)
        .then(results => 
                ({
                    id: results.data.results[0].location.parent_id,
                    name: results.data.results[0].location.id,
                    latitude: results.data.results[0].location.coordinates.latitude,
                    longitude: results.data.results[0].location.coordinates.longitude,
                    snippet: results.data.results[0].location.snippet,
                    days: results.data.results[0].days
                })
            )
        .then(dayplans => res.json(dayplans))
        .catch(err => res.status(422).json(err))
    }
}
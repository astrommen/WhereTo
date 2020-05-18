const axios = require("axios");

module.exports = {
    findAll: function(req, res) {
        const {query:params} = req;
        let url=`https://www.triposo.com/api/20200405/city_walk.json?location_id=${params.city}&total_time=200&optimal=true&account=${process.env.REACT_APP_TP_ID}&token=${process.env.REACT_APP_TP_TOKEN}`
        console.log(url)
        axios
        .get(url)
        .then(results => results.data.results[0].way_points.map(result => 
            ({
                walkTime: results.data.results[0].walk_duration,
                distance: results.data.results[0].walk_distance,
                stops: results.data.results[0].way_points[0]
            })
        )
        )
        .then(walks => res.json(walks))
        .catch(err => res.status(422).json(err))
    }

}


  
  
  

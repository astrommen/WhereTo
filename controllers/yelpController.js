const axios = require("axios");

module.exports = {
    findAll: function(req, res) {
        const {query:params} = req;
        console.log(params)
        let url = (`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`)
        console.log(url)
        const config = {
            headers: {
              'Authorization': `Bearer ${process.env.REACT_APP_YELP_APIKEY}`
            }
            ,
            params: {
                categories: params.term,
                location: params.location,
            }
          };
        axios
        .get(url, config)
        .then(results => console.log(results.data))
        .then(eateries => res.json(eateries))
        .catch(err => res.status(422).json(err))
    }
}
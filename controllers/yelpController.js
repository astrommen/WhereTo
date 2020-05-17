const axios = require("axios");

module.exports = {
    findAll: function(req, res) {
        const {query: params} = req;
        let url =`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?term=food&location=${params.location}&categories=${params.meal}`
        axios
        .get(url, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_YELP_APIKEY}`
            }
        })
        .then(results => console.log(results.data)
        )
        .then(eateries => res.json(eateries))
        .catch(err => res.status(422).json(err))
    }
}
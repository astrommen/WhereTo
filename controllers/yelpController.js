const axios = require("axios");

module.exports = {
    findAll: function(req, res) {
        const {query: params} = req;
        let url =`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${params.location}`
        axios
        .get(url, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_YELP_APIKEY}`
            }, 
            params: {
                categories: params.meal
            }
        }).then(results => console.log(results)
        )
        .then(eateries => res.json(eateries))
        .catch(err => res.status(422).json(err))
    }
}
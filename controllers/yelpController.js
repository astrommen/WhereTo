const axios = require("axios");

module.exports = {
    findAll: function(req, res) {
        const {query:params} = req;
        let url = (`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`)
        const config = {
            headers: {
              'Authorization': `Bearer ${process.env.REACT_APP_YELP_APIKEY}`,
              "X-Requested-With": "XMLHttpRequest",
              "dataType": 'jsonp',
              "Access-Control-Allow-Origin": "*",
            }
            ,
            params: {
                categories: params.term,
                location: params.location,
            }
          };
        axios
        .get(url, config)
        .then(results => results.data.businesses.map(
          result =>
          ({
            id: result.id,
            name: result.name,
            image: result.image_url,
            isClosed: result.is_closed,
            phone: result.display_phone,
            street: result.location.address1,
            city: result.location.city,
            state: result.location.state,
            zip: result.location.state,
            rating: result.rating,
            reviews: result.review_count,
            link: result.url,
            latitude: result.coordinates.latitude,
            longitude: result.coordinates.longitude
          })
        ))
        .then(eateries => res.json(eateries))
        .catch(err => console.error(err))
    }
}
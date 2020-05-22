const axios = require("axios");

module.exports = {
    findAll: function(req, res) {
        const {query:params} = req;
        console.log(params)
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
            term: params.breakfast,
            location: params.location
          }
        };
        console.log(params)
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
    },
    findById: function(req,res) {
      db.Vacation
      .find(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req,res) {
      db.Vacation
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req,res) {
      db.Vacation
      .findByID({_id: req.params.id})
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Vacation
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}
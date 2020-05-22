const axios = require("axios");

module.exports = {
    findAll: function(req,res) {
        const { query:params } = req;
        let url = `https://ridb.recreation.gov/api/v1/recareas?limit=8&offset=0&full=true&state=${params.state}&activity=${params.activities}&lastupdated=10-01-2018&sort=Name&apikey=${process.env.REACT_APP_RIBD_APIKEY}`
        axios
        .get(url)
        .then(results => 
            results.data.RECDATA.map(
                result =>
                ({
                    id: result.RecAreaID,
                    name: result.RecAreaName,
                    description: result.RecAreaDescription,
                    longitude: result.RecAreaLongitude,
                    latitude: result.RecAreaLatitude,
                    street: result.RECAREAADDRESS[0].RecAreaStreetAddress1,
                    city: result.RECAREAADDRESS[0].City,
                    postalCode: result.RECAREAADDRESS[0].PostalCode,
                    state: result.RECAREAADDRESS[0].AddressStateCode,
                    directions: result.RecAreaDirections,
                    link: result.LINK[0].URL,
                    images: result.MEDIA,
                    activities: result.ACTIVITY
                })
                )
            )
            .then(activities => res.json(activities))
            .catch(err => res.status(422).json(err))
    },
    findById: function(req,res) {
        db.Outdoor
        .find(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req,res) {
        db.Outdoor
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req,res) {
        db.Outdoor
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
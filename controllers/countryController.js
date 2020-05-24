const axios = require("axios");
const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        const {query: params} = req;
        let url = `https://restcountries.eu/rest/v2/name/${params.country}`
        axios
        .get(url)
        .then(results => 
            ({
                name: results.data[0].name,
                latitude: results.data[0].latlng[0],
                longitude: results.data[0].latlng[1],
                currencies: results.data[0].currencies[0].name,
                languages: results.data[0].languages[0].name,
                flag: results.data[0].flag 
            })
        )
        .then(countryInfo => res.json(countryInfo))
        .catch(err => res.status(422).json(err))

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
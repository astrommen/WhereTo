const axios = require("axios");
const db = require("../models");

module.exports = {
    findAll: function(req,res) {
        const { params } = req.query;        
        const config = {
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                "x-rapidapi-key": `${process.env.REACT_APP_TA_APIKEY}`,
                "useQueryString": true
            }, "params": {
                "location_id": "1",
                "limit": "10",
                "sort": "relevance",
                "offset": "0",
                "lang": "en_US",
                "currency": "USD",
                "units": "mi",
                "query": params.location
            }
        }
        axios
            .get("https://tripadvisor1.p.rapidapi.com/locations/search", config)        
            .then((res) => console.log(res))
                // axios({
                //     "method":"GET",
                //     "url":"https://tripadvisor1.p.rapidapi.com/attractions/list",
                //     "headers":{
                //     "content-type":"application/octet-stream",
                //     "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
                //     "x-rapidapi-key":`${process.env.REACT_APP_TA_APIKEY}`,
                //     "useQueryString":true
                //     },
                //     "params":{
                //     "lang":"en_US",
                //     "currency":"USD",
                //     "sort":"recommended",
                //     "limit": "10",
                //     "lunit":"mi",
                //     "min_rating":"4",
                //     "bookable_first":"false",
                //     "subcategory": params.activity,
                //     "location_id": res.data.data[0].result_object.location_id
                //     }
                //     })
                //     .then((results) => console.log(results.data.data))
                    .then(trips => res.json(trips))
                    .catch(err => console.error(err))
    },
    findById: function(req,res) {
        db.Vacation
        .find(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log(req.body)
        db.Vacation
          .create(req.body)
          .then(dbModel => {
            return db.Vacation.findOneAndUpdate({ _id: req.body.userId }, 
              { $push: { sightseeing: dbModel._id } }, 
              { new: true })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
          })
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
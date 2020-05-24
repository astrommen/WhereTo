const axios = require("axios");
const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        const {query:params} = req;
        let url=`https://www.triposo.com/api/20200405/city_walk.json?location_id=${params.city}&total_time=200&optimal=true&account=${process.env.REACT_APP_TP_ID}&token=${process.env.REACT_APP_TP_TOKEN}`
        console.log(url)
        axios
        .get(url)
        .then(results =>
            ({
                walkTime: results.data.results[0].walk_duration,
                distance: results.data.results[0].walk_distance,
                stops: results.data.results[0].way_points
            })

        )
        .then(walks => res.json(walks))
        .catch(err => res.status(422).json(err))
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
              { $push: { walk: dbModel._id } }, 
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


  
  
  

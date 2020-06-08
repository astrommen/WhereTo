const db = require("../models");

// Defining methods for the vacationsController
module.exports = {
  findAll: function (req, res) {
    db.Vacation
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Vacation
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("controller" , req.body)
    db.Vacation
      .create(req.body)
      .then(dbModel => {
        return db.User.findOneAndUpdate({ _id: req.body.userId }, { $push: { vacations: dbModel._id } }, { new: true }).then(dbUser => res.json(dbModel)).catch(err => res.status(422).json(err));
      })
  },
  update: function (req, res) {
    db.Vacation
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateSightseeing: function (req, res) {
    db.Vacation
      .findOneAndUpdate({ _id: req.params.id }, { $push: { sightseeing: req.body } }, { new: true })
      .then(dbUser => {
        console.log("SIGHTSEEING ADDED")
        res.json(dbUser)
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Vacation
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};

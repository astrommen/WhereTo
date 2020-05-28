const axios = require("axios");
const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    const { query: params } = req;
    let url = `https://ridb.recreation.gov/api/v1/recareas?limit=8&offset=0&full=true&state=${params.location}&activity=${params.activities}&lastupdated=10-01-2018&sort=Name&apikey=${process.env.REACT_APP_RIBD_APIKEY}`
    console.log("outdoors url from controller: ", url)
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
              link: result.LINK[0] ? result.LINK[0].URL : "missing",
              images: result.MEDIA,
              activities: result.ACTIVITY
            })
        )
      )
      .then(activities => res.json(activities))
      .catch(err => console.error(err))
  },
  findById: function (req, res) {
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
          { $push: { outdoors: dbModel._id } },
          { new: true })
          .then(dbUser => res.json(dbUser))
          .catch(err => res.status(422).json(err));
      })
  },
  update: function (req, res) {
    db.Vacation
      .findOneAndUpdate({ _id: req.params.id },
        req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateRibd: function (req, res) {
    db.Vacation
      .findOneAndUpdate({ _id: req.params.id }, { $push: { outdoors: req.body } }, { new: true })
      .then(dbUser => {
        console.log("OUTDOORS ADDED")
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
  }

}
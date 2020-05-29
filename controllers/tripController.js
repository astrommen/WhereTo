const axios = require("axios");
const db = require("../models");

module.exports = {
    findAll: function(req,res) {

        const { query: params } = req;
        console.log(typeof params.location)
        const config = {
            headers: {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                "x-rapidapi-key": `${process.env.REACT_APP_TA_APIKEY}`,
                "useQueryString": true
              }, params: {
                location_id: "1",
                limit: 30,
                sort: "relevance",
                offset: 0,
                lang: "en_US",
                currency: "USD",
                units: "km",
                query: params.location
              }

        };
        console.log(params)
        axios
        .get("https://tripadvisor1.p.rapidapi.com/locations/search", config)
            .then((result) => {
              console.log("location id: ", result.data.data[0].result_object.location_id)
            //   const infoArray = []
            //   infoArray.push({
            //     location_id: res.data.data[0].result_object.location_id,
            //     name: res.data.data[0].result_object.location_string,
            //     latitude: res.data.data[0].result_object.latitude,
            //     longitude: res.data.data[0].result_object.longitude
            //   })
            //   this.setState({ locationInfo: infoArray })
              axios({
                "method": "GET",
                "url": "https://tripadvisor1.p.rapidapi.com/attractions/list",
                "headers": {
                  "content-type": "application/octet-stream",
                  "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                  "x-rapidapi-key": `${process.env.REACT_APP_TA_APIKEY}`,
                  "useQueryString": true
                }, "params": {
                  "lang": "en_US",
                  "currency": "USD",
                  "sort": "recommended",
                  "limit": "10",
                  "lunit": "mi",
                  "min_rating": "4",
                  "bookable_first": "false",
                  "location_id": result.data.data[0].result_object.location_id
                }
              })
                .then((items) => {
                    console.log(items)
                //   const tripsArray = []
                //   for (var i = 0; i < items.data.data.length; i++) {
                //     if (items.data.data[i].name) {
                //       tripsArray.push({
                //         id: items.data.data[i].location_id,
                //         address: items.data.data[i].address,
                //         description: items.data.data[i].description,
                //         latitude: items.data.data[i].latitude,
                //         longitude: items.data.data[i].longitude,
                //         name: items.data.data[i].name,
                //         phone: items.data.data[i].phone,
                //         openNow: items.data.data[i].open_now_text,
                //         image: items.data.data[i].photo ? items.data.data[i].photo.images.medium.url : "./img/location/noImage.png",
                //         rank: items.data.data[i].ranking,
                //         website: items.data.data[i].website
                //       })
                //     }
                //   }
                //   this.setState({ trips: tripsArray, loading: false });
                  // console.log(this.state.trips)
                })
                .catch(err => console.log("inner catch"));
            })
            .catch(err => console.log(err.response.status));
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
      console.log("tripController: ", req.params.vacaId)
        db.Vacation.findByIdAndUpdate(
          { _id: req.params.vacaId },
          { $pull: {sightseeing: { id: req.params.id } } },
          { multi: true })
          .then(dbModel => {
            console.log('made to first then')
            db.Vacation.findById(req.params.vacaId)
            .then(data => {res.json(data)})
          })
          .catch(err => res.status(422).json(err));
      }
}
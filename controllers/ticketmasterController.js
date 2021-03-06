const axios = require("axios");
const db = require("../models");


module.exports = {
    findAll: function (req, res) {
        const { query: params } = req;
        let url = `https://app.ticketmaster.com/discovery/v2/events?classificationName=[${params.activity}]&radius=${params.distance}&unit=miles&startDateTime=${params.dateStart}&city=${params.city}&state=${params.state}&apikey=${process.env.REACT_APP_TM_APIKEY}`
        console.log(process.env.REACT_APP_TM_APIKEY)
        axios
            .get(url)
            .then(results => {
                if (!results.data._embedded) {
                    return new Error("No results")
                }
                return results.data._embedded.events.map(
                    result =>
                        ({
                            id: result.id,
                            name: result.name,
                            url: result.url,
                            image: result.images[0].url,
                            localDate: result.dates.start.localDate,
                            localStartTime: result.dates.start.localTime,
                            priceRange: result ? result.priceRanges : "Price information not available",
                            // priceRangeMax: result.priceRanges[0].max,
                            // currency: result.priceRanges[0].currency,
                            seatmapLink: result ? result.seatmap : "no link",
                            venueName: result._embedded.venues[0].name,
                            venueUrl: result._embedded.venues[0].url,
                            venueCity: result._embedded.venues[0].city.name,
                            venueState: result._embedded.venues[0].state.name,
                            venueStreet: result._embedded.venues[0].address.line1,
                            venuePostal: result._embedded.venues[0].postalCode,
                            longitude: result._embedded.venues[0].location.longitude,
                            latitude: result._embedded.venues[0].location.latitude
                        })
                )
            })
            .then(events => res.json(events))
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
                    { $push: { events: dbModel._id } },
                    { new: true })
                    .then(dbUser => res.json(dbUser))
                    .catch(err => res.status(422).json(err));
            })
    },
    update: function (req, res) {
        db.Vacation
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateEvent: function (req, res) {
        db.Vacation
            .findOneAndUpdate({ _id: req.params.id }, { $push: { events: req.body } }, { new: true })
            .then(dbUser => {
                console.log("EVENT ADDED")
                res.json(dbUser)
            })
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        // console.log("controller"+req.params.vacId+"here")
        let events
        db.Vacation
        .findById({ _id: req.params.vacId })
        .then(dbModel => { 
            // console.log("our model" , dbModel.events[0])
            events=dbModel.events.filter(event => {
                // console.log(event.id)
                // console.log(req.params.id)    
                return event.id!==req.params.id});
            // console.log("our events ",events)
            db.Vacation.findById({ _id: req.params.vacId })
            .then(vacation => vacation.updateOne({events: events})
            );
        })
            .then(dbModel => res.json(events))
            .catch(err => console.log(err));
    }

}
const db = require("../models");
const axios = require("axios");

module.exports = {
    findAll: function(req, res) {
        const {query: params} = req;
        axios
        .get(`https://app.ticketmaster.com/discovery/v2/events?classificationName=${activity}&radius=${distance}&unit=miles&startDateTime=${dateStart}T00:00:00Z&endDateTime=${dateEnd}T00:00:00Z&city=${city}&apikey=${process.env.REACT_APP_TM_APIKEY}`, {params})
        .then(results =>
            results.res.data._embedded.events.filter(
                result =>
                result.id &&
                result.name &&
                result.url &&
            result.images[0].url &&
            result.dates.start.localdate &&
            result.dates.start.localTime &&
            result.priceRanges[0].min &&
            result.priceRanges[0].max &&
            result.priceRanges[0].currency &&
            result.seatmap.staticUrl &&
            result._embedded.venues[0].name &&
            result._embedded.venues[0].url &&
            result._embedded.venues[0].city.name &&
            result._embedded.venues[0].state.name &&
            result._embedded.venues[0].address.line1 &&
            result._embedded.venues[0].postalCode
            )
        )
        .then(apiEvents =>
            db.Event.find().then(dbEvents =>
                apiEvents.filter(apiEvent =>
                    dbEvents.every(dbEvent => dbEvent.tmId.toString() !==apiEvent.id)
                    )
                )
            )
            .then(events => res.json(events))
            .catch(err => res.status(422).json(err))
    }
}
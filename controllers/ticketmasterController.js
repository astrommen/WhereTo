const axios = require("axios");

module.exports = {
    findAll: function(req, res) {
        const {query: params} = req;
        let url =`https://app.ticketmaster.com/discovery/v2/events?classificationName=${params.activity}&radius=${params.distance}&unit=miles&startDateTime=${params.dateStart}T00:00:00Z&endDateTime=${params.dateEnd}T00:00:00Z&city=${params.city}&apikey=${process.env.REACT_APP_TM_APIKEY}`
        axios
        .get(url)
        .then(results => 
            results.data._embedded.events.map(
                result =>
                ({ 
                    id: result.id,
                    name: result.name,
                    url: result.url,
                    image: result.images[0].url,
                    localDate: result.dates.start.localdate,
                    localStartTime: result.dates.start.localTime,
                    // priceRangeMin: result.priceRanges[0].min,
                    // priceRangeMax: result.priceRanges[0].max,
                    // currency: result.priceRanges[0].currency,
                    // seatmapLink: result.seatmap.staticUrl,
                    venueName: result._embedded.venues[0].name,
                    venueUrl: result._embedded.venues[0].url,
                    venueCity: result._embedded.venues[0].city.name,
                    venueState: result._embedded.venues[0].state.name,
                    venueStreet: result._embedded.venues[0].address.line1,
                    venuePostal: result._embedded.venues[0].postalCode
                })
            )
        )
        .then(events => res.json(events))
        .catch(err => res.status(422).json(err))
    }
}
const axios = require("axios");

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

    }
}
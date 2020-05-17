const axios = require("axios");

module.exports = {
    findAll: function(req, res) {
        const {query: params} = req;
        let url = `https://restcountries.eu/rest/v2/name/${params.country}`
        axios
        .get(url)
        .then(results => 
            ({
                name: results.data.name,
                latitude: results.data.latlng[0],
                longitude: results.data.latlng[1],
                currency: results.data.currencies,
                language: results.data.languages
            })
        )
        .then(countryInfo => console.log(countryInfo))
        .catch(err => res.status(422).json(err))

    }
}
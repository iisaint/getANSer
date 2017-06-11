var axios = require('axios');

const GET_ANSER_URL = 'http://getanser.com:2222/n/';
const GET_GOOGLE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
const GET_TGOS_URL = 'http://getanser.com:2222/tgos/';

module.exports = {
    getAll: function (address) {
        var encodedAddress = encodeURIComponent(address);

        function getAnser() {
            return axios.get(`${GET_ANSER_URL}${encodedAddress}`);
        }

        function getGoogle() {
            return axios.get(`${GET_GOOGLE_URL}${encodedAddress}`);
        }

        function getTGOS() {
            return axios.get(`${GET_TGOS_URL}${encodedAddress}`);
        }

        return axios.all([getAnser(), getGoogle(), getTGOS()])
            .then(axios.spread(function (anser, google, tgos) {
                console.log('anser = ' + JSON.stringify(anser.data, undefined, 2));
                console.log('google = ' + JSON.stringify(google.data, undefined, 2))
                console.log('tgos = ' + JSON.stringify(tgos.data, undefined, 2));
                return {
                    anser: anser.data,
                    google: google.data,
                    tgos: tgos.data
                };
        })).catch( function (res) {
            throw new Error(res.data);
        });
    },
    getAnser: function (address) {
        var encodedAddress = encodeURIComponent(address);
        var requestUrl = `${GET_ANSER_URL}${encodedAddress}`;
        console.log(requestUrl);

        return axios.get(requestUrl).then(function (res) {
            console.log(res.data);
            return res.data;
        }, function (res) {
            throw new Error(res.data);
        });
    }
}
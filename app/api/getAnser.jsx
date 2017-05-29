var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c7525' +
        '17b2d&units=imperial'; 
const GET_ANSER_URL = 'http://getanser.com:2222/n/';

module.exports = {
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

        // return axios.get(requestUrl).then(function (res) {     return res;     // if
        // (res.data.cod && res.data.message) {     //     throw new
        // Error(res.data.message);     // } else {     //     return res.data;     // }
        // }, function (res) {     throw new Error(res); });
        // var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedAddress}`;
        // return axios.get(requestUrl).then(function (res) {
        //         if (res.data.cod && res.data.message) {
        //             throw new Error(res.data.message);
        //         } else {
        //             return res.data.main.temp;
        //         }
        //     }, function (res) {
        //         throw new Error(res.data.message);
        //     });
        
    }
}
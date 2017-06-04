var axios = require("axios");

    //const OPEN_WEATHER_MAP_URL = 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=47cba735e6fc41fcb492dd289fb25990&units=imperial';
    //const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=imperial';
    //const OPEN_WEATHER_MAP_URL = 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=ba5e4281b59b6187c8fa9727d9113eb8&units=imperial';
    const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ba5e4281b59b6187c8fa9727d9113eb8&units=metric';

// module.exports = {
//   getTemp: function(location) {
//     var encodedLocation = encodeURIComponent(location);
//     var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
//
//     return axios.get(requestUrl).then(function (res) {
//       //debugger;
//       if(res.data.cod && res.data.message){
//       throw new Error(res.data.message)
//     } else {
//       return res.data.main.temp;
//     }
//     }, function (res) {
//       throw new Error(res.data.message);
//     });
//   }
// }

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
};

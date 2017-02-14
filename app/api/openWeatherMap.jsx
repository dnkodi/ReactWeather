var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=3120922bd4e06a6db8f4a6728e04f55c&units=imperial';

//3120922bd4e06a6db8f4a6728e04f55c
module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){

      if (res.data.cod && res.data.message){
        throw new Error(res.data.message);
        //console.log(res.data.cod, res.data.message);
      }else{
        return res.data.main.temp;
      }
    }, function(err){
      throw new Error(err.response.data.message);
      //console.log(res.data.message);
    })
  }
}

var apiKey = require('./../.env').apiKey;

function Temperature() {

}

Temperature.prototype.getTemp = function(cityName, callback) {
  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=" + apiKey;
  $.get(url).then(function(response) {
    callback(response.main.temp)

  });
};

exports.tempModule = Temperature;

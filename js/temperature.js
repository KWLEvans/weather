var apiKey = require('./../.env').apiKey;

function Temperature() {

}

Temperature.prototype.convertToF = function(temperature) {
  var tempInFarenheight = Math.floor((temperature * (9/5)) - 459.67);
  return tempInFarenheight;
};

Temperature.prototype.getTemp = function(cityName, callback) {
  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=" + apiKey;
  var temp = this;
  $.get(url).then(function(response) {
    var temperatureK = response.main.temp;
    var temperatureF = temp.convertToF(response.main.temp);
    callback(temperatureF, temperatureK, cityName)
  });
};

exports.tempModule = Temperature;

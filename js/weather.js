var apiKey = require('./../.env').apiKey;

function Weather() {

}

Weather.prototype.humidity = function(cityName, callback) {
  var url = "http://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&APPID=" + apiKey;
  $.get(url).then(function(response) {
    callback(cityName, response.main.humidity);
  }).fail(function(error) {
    $("#display-weather").text(error.responseJSON.message);
  });
};

Weather.prototype.ozoneHole = function(lat, long, callback) {
  var date = moment();
  url = "http://api.openweathermap.org/pollution/v1/o3/" + lat + "," + long + "/" + date.toISOString() + ".json?appid=" + apiKey;
  $.get(url).then(function(response) {
    callback(response);
  });
}

exports.weatherModule = Weather;

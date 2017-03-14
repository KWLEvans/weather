var apiKey = require('./../.env').googleApi;
var Weather = require('./../js/weather.js').weatherModule;

function Location() {

}

Location.prototype.getLatLong = function(city, callback) {
  var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "&key=" + apiKey;
  $.get(url).then(function(response) {
    var lat = response.results[0].geometry.location.lat.toFixed(1);
    var long = response.results[0].geometry.location.lng.toFixed(1);
    var weather = new Weather();
    weather.ozoneHole(city, lat, long, callback);
  });
}

exports.locationModule = Location;

var apiKey = require('./../.env').googleApi;
var Weather = require('./../js/weather.js').weatherModule;

function Location() {

}

Location.prototype.getLatLong = function(address, callback) {
  var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + apiKey;
  $.get(url).then(function(response) {
    var lat = response.results[0].geometry.location.lat;
    var long = response.results[0].geometry.location.lng;
    var weather = new Weather();
    weather.ozoneHole(lat, long, callback);
  });
}

exports.locationModule = Location;

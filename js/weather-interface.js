var Weather = require('./../js/weather.js').weatherModule;
var Location = require('./../js/location.js').locationModule;


function displayHumidity(city, data) {
  $("#weather-display").text("The humidity in " + city + " is " + data + ".");
}

function showOzone(city, response) {
  $("#ozone-display").text("The ozone layer above " + city + " is " + response + " of normal."); 
}

$(function() {
  $("#humidity-button").click(function(event) {
    event.preventDefault();

    var weather = new Weather();
    weather.humidity($("#city").val(), displayHumidity);
  });

  $("#ozone-button").click(function(event) {
    event.preventDefault();
    var city = $("#city").val();
    var location = new Location();
    location.getLatLong(city, showOzone);
  });
});

var Weather = require('./../js/weather.js').weatherModule;

function displayHumidity(city, data) {
  $("#weather-display").text("The humidity in " + city + " is " + data + ".");
}

$(function() {
  $("#humidity-button").click(function(event) {
    event.preventDefault();

    var weather = new Weather();
    weather.humidity($("#city").val(), displayHumidity);
  });
});

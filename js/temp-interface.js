var Temperature = require('./../js/temperature.js').tempModule;


function showTemp(temperatureF, temperatureK, cityName) {
  $('#temperature-display').text("It is currently " + temperatureF + " F in " + cityName + ". That's " + temperatureK + " Kelvin, if you're curious.");
};

$(document).ready(function() {
  $('#temperature-button').click(function(event) {
    event.preventDefault();

    var newTemperature = new Temperature();
    var cityName = $("#city").val();
    newTemperature.getTemp(cityName, showTemp);



  });



});

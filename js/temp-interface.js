var Temperature = require('./../js/temperature.js').tempModule;


function showTemp(temperature) {
  console.log(temperature);
};

$(document).ready(function() {
  $('#temperature-button').click(function(event) {
    event.preventDefault();

    var newTemperature = new Temperature();
    var cityName = $("#city").val();
    newTemperature.getTemp(cityName, showTemp);



  });



});

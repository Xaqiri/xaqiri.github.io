$(document).ready(function() {
    var loc = [];
    var cityName = "";
    var country = "";
    var temp = 0;
    var conditions = "";
    var apiKey = "8a5910e9d87b9b06f733d4de4979b649";
    var things = "";
    var weatherIcons = ["wi-day-sunny", "wi-night-clear", "wi-cloudy", "wi-raindrops", "wi-snowflake-cold", "wi-storm-showers"];
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            $.getJSON("http://api.openweathermap.org/data/2.5/forecast/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&units=imperial" + "&APPID=" + apiKey, function(a) {
                cityName = a.city.name;
                country = a.city.country;
                temp = a.list[0].main.temp;
                conditions = a.list[0].weather[0].main;
                $("#location").html(cityName + ", " + country);
                $("#tempNum").html(temp + " ");
                $("#conditions").html(conditions);
            });
        });
    }
    $("#tempMode").mouseover(function() {
        $(this).css("color", "#FFF");
    });
    $("#tempMode").mouseout(function() {
        $(this).css("color", "#AAA");
    });
});

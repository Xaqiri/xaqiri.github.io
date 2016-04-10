var mo = function(id) {
    $(id).mouseover(function() {
        $(this).css("color", "#FFF");
    });
    $(id).mouseout(function() {
        $(this).css("color", "#AAA");
    });
};

var getConditionID = function(a) {
    return a.list[0].weather[0].id;
};

var getIcon = function(id) {
    var weatherIcons = ["wi-day-sunny", "wi-night-clear", "wi-cloudy",
    "wi-raindrops", "wi-snowflake-cold", "wi-cloud"];
    var icon = 0;
    if (id >= 200 && id < 600) { icon = 3; }
    else if (id >= 600 && id < 700) { icon = 4; }
    else if (id === 800) { icon = 0; }
    else if (id > 800 && id < 900) { icon = 2; }
    else { id = 5; }
    return weatherIcons[icon];
};

var tempConversion = function(temp) {

};

$(document).ready(function() {
    var loc = [];
    var cityName = "";
    var country = "";
    var temp = 0;
    var conditions = "";
    var apiKey = "8a5910e9d87b9b06f733d4de4979b649";
    var conditionIcon = "";
    var conID = 0;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            $.getJSON("http://api.openweathermap.org/data/2.5/forecast/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&units=imperial" + "&APPID=" + apiKey, function(a) {
                cityName = a.city.name;
                country = a.city.country;
                temp = Math.round(a.list[0].main.temp);
                conditions = a.list[0].weather[0].main;
                $("#location").html(cityName + ", " + country);
                $("#tempNum").html(temp + " ");
                $("#conditions").html(conditions);
                conID = getConditionID(a);
                conditionIcon = getIcon(conID);
                $("#weatherIcon").html('<i class="' + "wi " + conditionIcon + '"></i>');
                $("body").css("visibility", "visible");
                mo("#tempMode");
                });
            });
        }
});

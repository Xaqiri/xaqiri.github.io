// Colors: [bgColor, titleColor, textColor, footerColor]
var dayColors = ["#f4f261", "#6b0000", "#402800", "#ff7a00"];
var nightColors = ["#080C14", "#AADDDD", "#BBBBCC"];
var d = new Date();
var h = d.getHours();
var timeOfDay = "";

var mo = function(id) {
    $(id).mouseover(function() {
        $(this).css("color", "#FFF");
    });
    $(id).mouseout(function() {
        if (timeOfDay === "day") { $(this).css("color", dayColors[2]); }
        else { $(this).css("color", nightColors[2]); }
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
    else if (id === 800 && timeOfDay === "day") { icon = 0; }
    else if (id === 800 && timeOfDay === "night") { icon = 1; }
    else if (id > 800 && id < 900) { icon = 2; }
    else { id = 5; }
    return weatherIcons[icon];
};

var tempConversion = function(temp) {
    var newTemp = 0;
    if ($("#tempMode").text()==="F") {
        newTemp = Math.round((temp-32)*5/9);
        $("#tempMode").html("C");
    } else {
        newTemp = Math.round((temp*9/5)+32);
        $("#tempMode").html("F");
    }
    return newTemp;
};

var getTime = function() {
    if (h <= 6 || h >=19) {
        $("body").css("background-color", nightColors[0]);
        $("#title").css("color", nightColors[1]);
        $("body").css("color", nightColors[2]);
        timeOfDay = "night";
    } else {
        $("body").css("background-color", dayColors[0]);
        $("#title").css("color", dayColors[1]);
        $("body").css("color", dayColors[2]);
        $("footer a").css("color", dayColors[3]);
        timeOfDay = "day";
    }
    return timeOfDay;
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
    var timeOfDay = getTime();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            $.getJSON("http://api.openweathermap.org/data/2.5/forecast/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&units=imperial" + "&APPID=" + apiKey, function(a) {
                cityName = a.city.name;
                country = a.city.country;
                temp = Math.round(a.list[0].main.temp);
                conditions = a.list[0].weather[0].main;
                $("#location").html(cityName + ", " + country);
                $("#conditions").html(conditions);
                $("#tempNum").html(temp + " ");
                conID = getConditionID(a);
                conditionIcon = getIcon(conID);
                $("#weatherIcon").html('<i class="' + "wi " + conditionIcon + '"></i>');
                $("body").css("visibility", "visible");
                $("#tempMode").on("click", function() {
                    temp = tempConversion(temp);
                    $("#tempNum").html(temp + " ");
                });
                mo("#tempMode");
                });
            });
        }
});

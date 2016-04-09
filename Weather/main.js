$(document).ready(function() {
    var loc = [];
    var apiKey = "8a5910e9d87b9b06f733d4de4979b649";
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            loc[0] = position.coords.latitude;
            loc[1] = position.coords.longitude;
            $.getJSON("http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID="+apiKey, function(a) {
            });
        });
    }
});

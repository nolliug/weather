
var callBackGetSuccess = function(data) {
console.log("donnees api: ",data);
var ville = document.getElementById("zone_ville");
ville.innerHTML  = "Nous sommes à " + data.name;
var temperature = document.getElementById("zone_meteo");
temperature.innerHTML  = "La Temperature est de: " + data.main.temp +  " °";
var humidite = document.getElementById("zone_humidite");
humidite.innerHTML  = "L'Humidité est de: " + data.main.humidity + " %";
var icon = data.weather[0].icon;
var icone = document.querySelector("#zone_icone");
var url2 = 'http://openweathermap.org/img/w/'+icon+'.png';
icone.setAttribute("src", url2 );
//ajout heure d'une API différente
var heure = document.getElementById("zone_localtime");
heure.innerHTML  = "Il est: " + data.localtime;
};

function buttonClickGET() {
var queryLoc = document.getElementById('queryLoc').value;
var url = "https://api.openweathermap.org/data/2.5/weather?q="+queryLoc+"&appid=cc8ba9e786ee8b68fbfdb7414f7ec4ce&units=metric";
var heure = "https://api.apixu.com/v1/current.json?key=46f8da326db047e484281607192405&q=";

$.get(url, callBackGetSuccess).done(function() {

})
.fail(function() {
alert( "error" );
})
.always(function() {

});
}
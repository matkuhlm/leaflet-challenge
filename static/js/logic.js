//make map var
var eqmap = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 6

};)

L.titleLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribute: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: "pk.eyJ1IjoibWF0a3VobG0iLCJhIjoiY2toZmhzMmV3MHI1dTJwcnoxaWU5b2E5biJ9.cGXmN24EioKcTr0iXajPwQ"
  }).addTo(eqMap);

  var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";


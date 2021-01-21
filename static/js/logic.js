//make map var
var eqmap = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 6

};)
//make layer
L.titleLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribute: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: "pk.eyJ1IjoibWF0a3VobG0iLCJhIjoiY2toZmhzMmV3MHI1dTJwcnoxaWU5b2E5biJ9.cGXmN24EioKcTr0iXajPwQ"
  }).addTo(eqMap);

  
  //Get url
var getUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

//make color rads
d3.json(getUrl, function(data){
    function styleSet(feature){
        return {
            opacity: 2,
            fillOpacity: 2,
            fillColor: "red",
            color: "#5555",
            radius: getRadius(feature.properties.mag),
            stroke: true,
            weight: 1

        };
    };
});
console.log

//make magnitude colors
function getColor(magnitude){
    switch(true){
    case magnitude >5:
        return "#ea2c2c";
        case magnitude > 4:
          return "#ea822c";
        case magnitude > 3:
          return "#ee9c00";
        case magnitude > 2:
          return "#eecc00";
        case magnitude > 1:
          return "#d4ee00";
        default:
          return "#98ee00";
        };
      };
    };
};
console.log





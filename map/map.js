// Adding Map
var map = new L.Map('map', {
    fullscreenControl: true,
    fullscreenControlOptions: {
      position: 'topleft'
    }
  }).setView([12.248458308145507, 105.19409179687501], 7);




// Tile Layer
var Jawg_Dark = L.tileLayer('https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
	attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors; created by Geospatialyst',
	minZoom: 0,
	maxZoom: 22,
	subdomains: 'abcd',
	accessToken: 'wMEmropxqcsYlDx4SuPcdYeiHzjdaoX6co0HBAxfeupmdQ9D7MlyvQV6zqr3pZHH'
}).addTo(map);

// // Adding GeoJSON
// var options = {
//     style:{
//         opacity: 1,
//         weight: 1,
//         color: 'yellow',
//     }
// };

// Adding GeoJSON with popup
var options = {
    style: {
        opacity: 1,
        weight: 1,
        color: 'yellow',
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.Shape_Area) {
            layer.bindPopup("Shape Area: " + feature.properties.Shape_Area);
        }
    }
};

var commune = L.geoJSON(communeJSON, options).addTo(map);


var commune = L.geoJSON(communeJSON, options).addTo(map);

    /*==============================================
                    LAYER CONTROL
    ================================================*/
var baseMaps = {
    "Basemap": Jawg_Dark,
};

var overlayMaps = {
    'Commune Boundary': commune,
};
// map.removeLayer(commune);
L.control.scale({position:'bottomright', metric: true}).addTo(map);
L.control.layers(baseMaps, overlayMaps, {collapsed: true }).addTo(map);


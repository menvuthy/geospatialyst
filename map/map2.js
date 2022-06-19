
// Adding Map 2
var map2 = new L.Map('map2', {
    fullscreenControl: true,
    fullscreenControlOptions: {
      position: 'topleft'
    }
  }).setView([12.248458308145507, 105.19409179687501], 7);


var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri; created by Geospatialyst'
}).addTo(map2);

// Adding GeoJSON
var options = {
    style:{
        opacity: 1,
        weight: 1,
        color: 'yellow',
    }
};
var commune = L.geoJSON(communeJSON, options).addTo(map2);

    /*==============================================
                    LAYER CONTROL
    ================================================*/
var baseMaps = {
    "ESRI Satellite": Esri_WorldImagery,
};

var overlayMaps = {
    'Commune Boundary': commune,
};
// map.removeLayer(commune);
L.control.scale({position:'bottomright', metric: true}).addTo(map2);
L.control.layers(baseMaps, overlayMaps, { collapsed: true }).addTo(map2);



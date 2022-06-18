// Adding Map
var map = L.map('map').setView([12.410348655627436, 105.29296875], 7);


// Tile Layer
var Jawg_Dark = L.tileLayer('https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
	attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors; created by Geospatialyst',
	minZoom: 0,
	maxZoom: 22,
	subdomains: 'abcd',
	accessToken: 'wMEmropxqcsYlDx4SuPcdYeiHzjdaoX6co0HBAxfeupmdQ9D7MlyvQV6zqr3pZHH'
}).addTo(map);

// Adding GeoJSON
var options = {
    style:{
        opacity: 1,
        weight: 1,
        color: 'yellow',
    }
};
var commune = L.geoJSON(communeJSON, options).addTo(map);

    /*==============================================
                    LAYER CONTROL
    ================================================*/
var baseMaps = {
    "Jawg Dark": Jawg_Dark,
};

var overlayMaps = {
    'Commune Boundary': commune,
};
map.removeLayer(commune);
L.control.layers(baseMaps, overlayMaps, { collapsed: true }).addTo(map);



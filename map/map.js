
// // var map = L.map('map').setView([11.558478021687254, 104.93110656738283], 13);
// var map = L.map('map').setView([37.8, -96], 2);


// // Tile Layer
// var Jawg_Matrix = L.tileLayer('https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
// 	attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// 	minZoom: 0,
// 	maxZoom: 22,
// 	subdomains: 'abcd',
// 	accessToken: 'wMEmropxqcsYlDx4SuPcdYeiHzjdaoX6co0HBAxfeupmdQ9D7MlyvQV6zqr3pZHH'
// }).addTo(map)


// L.geoJSON(river, {
//     style: function (feature) {
//         return {color: feature.properties.color};
//     }
// }).bindPopup(function (layer) {
//     return layer.feature.properties.description;
// }).addTo(map);
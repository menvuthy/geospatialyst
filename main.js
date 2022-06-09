



// Define a view
var view = new ol.View({
    center : [11747711.18225723, 1418606.8615895545], //Coordinates of center
    zoom : 7 //zoom level of map
})

//Define basemap
var OSMBaseMap = new ol.layer.Tile({
    source: new ol.source.OSM({
        wrapX: false
      })
  })


// Define array of layers
var layerArray = [OSMBaseMap]

// Define our map
var map = new ol.Map({

    target:'map',
    layers:layerArray,
    view : view
})

// Define a WMS source
var tileWMSSource = new ol.source.TileWMS({
  url:'http://localhost:8080/geoserver/tutorial/wms',
  params:{'LAYERS':'tutorial:district'},
  serverType:'geoserver'
})


// Define a WMS Layer
var tileWMSLayer = new ol.layer.Tile({
  source:tileWMSSource
})

// map.addLayer(tileWMSLayer)

// Define a WMS Image source
var imageWMSSource = new ol.source.ImageWMS({
  url:'http://localhost:8080/geoserver/vuthy/wms',
  params:{'LAYERS':'vuthy:District_cambodia'},
  serverType:'geoserver'
})

//  Define Image WMS Layer
var imageWMSLayer = new ol.layer.Image({
  source:imageWMSSource
})

map.addLayer(imageWMSLayer)



//  Add on click even to map
map.on('click', function(evt){
  var ViewResolution = view.getResolution();
  var ClickedCoordinates = evt.coordinate;
  var projection = 'EPSG:3857';
  var param = {'INFO_FORMAT':'application/json'}

  var Clickedurl = imageWMSSource.getGetFeatureInfoUrl(ClickedCoordinates,ViewResolution,projection,param)



//   var vecSource = new ol.source.Vector({
//     format: new ol.format.GeoJSON,
//     url: Clickedurl
//   })
  
//   var vectLayer = new ol.layer.Vector({
//     source: vecSource,
//     style: new ol.style.Style({
//       fill: new ol.style.Fill({
//         color: 'green'
//       })
//     })
//   })

//   map.addLayer(vectLayer)
// })

  $.getJSON(Clickedurl, function(data){
    var arrayofFeatures = data.features
    if (arrayofFeatures.length > 0){
      var propertiesObj = arrayofFeatures[0].properties
      console.log('Province: ' + propertiesObj['ADM1_EN'] + ', District: ' + propertiesObj['ADM2_EN'])
    }else {
      console.log('Click on layer!')
    }

  })

})


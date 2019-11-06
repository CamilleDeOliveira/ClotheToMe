$( document ).ready(function() {
// initialize the map on the "map" div with a given center and zoom
var map = L.map('map', {minZoom: 6, maxZoom: 18}).setView([47, 3], 6);
// custom dark map
L.tileLayer.provider('CartoDB.DarkMatter').addTo(map);

// create custom icon (change css)
icon = L.divIcon({
        className: 'custom-div-icon',
        html: "<div style='background-color:#e0b704;' class='marker-pin'></div>",
        iconSize: [30, 42],
        iconAnchor: [15, 42]
    });

// markers informations
var marker = L.marker([44.836662, -0.570729], { icon: icon }).addTo(map);
var popup = marker.bindPopup('<h3>Steack-Fripes<h3><a href="https://goo.gl/maps/ijqtSC8u7GnH1boM9"><p>62 Rue du Mirail, 33800 Bordeaux</p></a>');

var marker = L.marker([45.834412, 1.263850], { icon: icon }).addTo(map);
var popup = marker.bindPopup('<b>FRIPERIE LYSAP</b>');

var marker = L.marker([48.858256, 2.352603], { icon: icon }).addTo(map);
var popup = marker.bindPopup('<b>FREEPSTAR</b>');

var marker = L.marker([45.757677, 4.829284], { icon: icon }).addTo(map);
var popup = marker.bindPopup('<b>Tilt Vintage Lyon</b>');

});

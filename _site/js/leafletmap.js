function myFunction() {
var map = L.map('map').setView([51.492222, 7.414229], 16);
L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
  attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &mdash; Icons from <a href="https://mapicons.mapsmarker.com" target="_blank">Maps Icons Collection</a> &mdash; Marie-Louise Timcke'
}).addTo(map);

map._layersMinZoom=16;

/*var circle = L.circle([51.508, -0.11], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);*/

/*var polygon = L.polygon([
    [51.492198, 7.414663],
    [51.492182, 7.414551]
],{ color: 'blue',
    fillColor: '#000',
    fillOpacity: 1})
  .addTo(map);*/

 var l1 = L.polyline([
  [51.492048, 7.414358],
  [51.491026, 7.414712],
  [51.490658, 7.415701],
  [51.490023, 7.410379],
  [51.490878, 7.410068],
  [51.490878, 7.410068],
  [51.490958, 7.409832],
  [51.491466, 7.409671],
  [51.491893, 7.410217],
  [51.492259, 7.413123],
  [51.492682, 7.415465],
  [51.492864, 7.415472],
  [51.492985, 7.416414],
  [51.493306, 7.416400],
  [51.493742, 7.416873],
  [51.493982, 7.417020],
  [51.494098, 7.417152],
  [51.494011, 7.417444],
  [51.493900, 7.417522],
  [51.494211, 7.419097],
  [51.494687, 7.419673],
  [51.494577, 7.420137],
  [51.494804, 7.421618],
  [51.494771, 7.421634],
  [51.494544, 7.420177],
  [51.494447, 7.420193],
  [51.493767, 7.420450],
  [51.493786, 7.420853],
  [51.493619, 7.421087],
  [51.493449, 7.420988],
  [51.493336, 7.419586],
  [51.493633, 7.419557],
  [51.493608, 7.419324],
  [51.494139, 7.419098],
  [51.494099, 7.418631],
  [51.493493, 7.418666],
  [51.493214, 7.417515],
  [51.493149, 7.417461],
  [51.492924, 7.416160],
  [51.492757, 7.416211],
  [51.492540, 7.415138],
  [51.492198, 7.414663]
],{ weight: 12, color: '#8bc2a5', opacity: 0.9 }).addTo(map);

 var l2 = L.polyline([
    [51.492198, 7.414663],
    [51.492095, 7.414530],
    [51.492048, 7.414358]
],{ weight: 12, color: '#f28d83', opacity: 0.9 }).addTo(map);

// create custom marker
var stairs = L.icon({
    iconUrl: 'http://datentaeter.de/wp-content/uploads/2016/04/stairs.png',

    iconSize:     [38, 35], // size of the icon
    iconAnchor:   [19, 35], // point of the icon which will correspond to marker's location
});

// create custom marker
var locker = L.icon({
    iconUrl: 'http://datentaeter.de/wp-content/uploads/2016/04/locker.png',

    iconSize:     [38, 35], // size of the icon
    iconAnchor:   [19, 35], // point of the icon which will correspond to marker's location
});

// create custom marker
var shower = L.icon({
    iconUrl: 'http://datentaeter.de/wp-content/uploads/2016/04/shower.png',

    iconSize:     [38, 35], // size of the icon
    iconAnchor:   [19, 35], // point of the icon which will correspond to marker's location
});


var p1 = L.marker([51.492142, 7.414776], {icon: stairs}).addTo(map);
var p2 =L.marker([51.492316, 7.415259], {icon: locker}).addTo(map);
var p3 =L.marker([51.489624, 7.416450], {icon: shower}).addTo(map);

l1.bindPopup("<strong>Laufstrecke</strong><br>Start-> Mathe-Tower -> Otto-Hahn-Str. -> SRGII -> Mensa -> EF50 -> FH-> Bibliothek -> Ziel<br><strong>Eine Runde sind 2.52 km</strong><br>Die Steigung an der Otto-Hahn-Straße ist raus, dafür wird das Gebiet der FH erlaufen.");
l2.bindPopup("Start/Ziel").openPopup();
p1.bindPopup("<strong>Mathe-Tower-Run</strong><br>220 Treppenstufen auf 10 Etagen.<br> Der Schnellste gewinnt. <br>Startzeiten ab 17 Uhr.");
p2.bindPopup("<strong>Umkleide</strong> <br>im Audimax");
p3.bindPopup("<strong>Umkleide und Dusche</strong> <br>im Sportinstitut");


var popup = L.popup();






}


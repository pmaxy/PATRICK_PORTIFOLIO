var map = L.map('map').setView([36.9, -1.15], 13); // Set initial coordinates and zoom level

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

// Add a marker to the map
L.marker([36.9, -1.15]).addTo(map)
.bindPopup('A sample marker.');

var map = L.map('map').setView([51.505, -0.09], 13); // Set initial coordinates and zoom level

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

// Add a marker to the map
L.marker([51.5, -0.09]).addTo(map)
.bindPopup('A sample marker.');
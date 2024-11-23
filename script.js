// Sidebar Toggle Functionality
document.querySelector('.hamburger').addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');

    // Adjust the hamburger button position based on sidebar visibility
    if (sidebar.classList.contains('open')) {
        this.style.bottom = '310px'; // Position the icon above the open sidebar
    } else {
        this.style.bottom = '10px'; // Reset to the original position
    }
});


// Leaflet Map Initialization
const map = L.map('map').setView([20.5937, 78.9629], 5); // Center on India

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

// Image and Map Handling
const cityImage = document.getElementById('cityImage');
const viewMapButton = document.getElementById('viewMapButton');
const citySelector = document.getElementById('citySelector');

// Display city image based on dropdown selection
citySelector.addEventListener('change', function () {
    const city = citySelector.value;
    cityImage.src = `images/${city.toLowerCase()}.png`; // Path should be correct
    cityImage.style.display = 'block';
    map.getContainer().style.display = 'none'; // Hide map when city image is displayed
});


// Show the map when "View Map of India" button is clicked
viewMapButton.addEventListener('click', function () {
    map.getContainer().style.display = 'block';
    cityImage.style.display = 'none';
});

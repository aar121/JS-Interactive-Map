//let button = document.getElementById("Click me")
//button.addEventListener("click", event)

let coords;

async function getCoordinates() {
    const coordinates = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    return [coordinates.coords.latitude, coordinates.coords.longitude]
}

async function buildMap() {
    const myMap = L.map('map', {
        center: coords,
        zoom: 12,
        coordinates: [],
        businesses: [],
        map: {},
        markers: {}
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: '15',
    }).addTo(myMap)
    
    const marker = L.marker(this.coordinates)
    marker.addTo(myMap)
}


window.onload = async () => {
    coords = await getCoordinates();
    buildMap();
}
const redPin = L.icon({
    iconUrl: './assets/red-pin.png',
    iconSize:     [38, 38], 
    iconAnchor:   [19, 38], 
    popupAnchor:  [0, -38] 
});

async function getAPI () {
    const options = {
        method: 'GET',
        headers: {
        Accept: 'application/json',
        Authorization: 'fsq3ATzZbmcGhdeFafr73wZcnJ+LlN6bK+4dh19a7ClS4u8='
        }
       }
}

businesses [hotels, museums, restaurants, hospitals, groceries]

if(document.querySelector('#mapa')) {

    const lat = 19.4334947
    const lng = -99.1493629
    const zoom = 16

    const map = L.map('mapa').setView([lat, lng], zoom);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, lng]).addTo(map)
        .bindPopup(`
            <h2 class="mapa__heading">Teatro Metropolitan</h2>
            <p class="mapa__texto">Teatro cede de los eventos de TicketHub</p>
        `)
        .openPopup();
}
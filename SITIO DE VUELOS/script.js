document.getElementById("flight-search-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const from = document.getElementById("from").value.toUpperCase();
    const to = document.getElementById("to").value.toUpperCase();
    const departureDate = document.getElementById("departure-date").value;
    const returnDate = document.getElementById("return-date").value;

    let url = `https://www.google.com/flights?hl=es#flt=${from}.${to}.${departureDate}`;
    if (returnDate) {
        url += `*${to}.${from}.${returnDate}`;
    }
    url += `;c:EUR;e:1;sd:1;t:f`;

    window.open(url, '_blank');
});

function scrollToSearch() {
    document.getElementById('search').scrollIntoView({ behavior: 'smooth' });
}

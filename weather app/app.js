let checkWeatherBtn = document.getElementById('checkWeatherBtn');

checkWeatherBtn.addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;

    if (city === '') {
        alert('Enter a city name');
        return;
    }

    const apiKey = 'b0fea88387f88a22ce3ce364bdbfb1cd';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url).then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('weatherResult').innerHTML = `
                    <div class="card p-4 weather-info">
                        <h2>${data.name}</h2>
                        <p>Temperature: <strong>${data.main.temp}&#8451;</strong></p>
                        <p>Weather: <strong>${data.weather[0].description}</strong></p>
                        <p>Humidity: <strong>${data.main.humidity}%</strong></p>
                        <p>Wind Speed: <strong>${data.wind.speed} m/s</strong></p>
                    </div>
                `;
            } else {
                document.getElementById('weatherResult').innerHTML = `
                    <div class="alert alert-danger text-center">Not found</div>
                `;
            }
        })
        .catch(() => {
            document.getElementById('weatherResult').innerHTML = `
                <div class="alert alert-danger text-center">No Internet</div>
            `;
        });
});


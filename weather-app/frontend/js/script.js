let forecastChart = null;

document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiUrl = `http://127.0.0.1:5000/weather?city=${city}`;
    const forecastUrl = `http://127.0.0.1:5000/forecast?city=${city}`;

    if (city === '') {
        displayError('Please enter a city name.');
        return;
    }

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found or API error occurred');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
            clearError();
        })
        .catch(error => {
            displayError(error.message);
        });

    fetch(forecastUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found or API error occurred');
            }
            return response.json();
        })
        .then(data => {
            displayForecast(data);
            clearError();
        })
        .catch(error => {
            displayError(error.message);
        });
});

function displayWeather(data) {
    document.getElementById('city-name').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('description').textContent = `Condition: ${data.weather[0].description}`;
    document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} m/s`;
}

function displayForecast(data) {
    const labels = data.list.map(item => new Date(item.dt * 1000).toLocaleTimeString());
    const temps = data.list.map(item => item.main.temp);

    if (forecastChart) {
        forecastChart.destroy();
    }

    const ctx = document.getElementById('forecastChart').getContext('2d');
    forecastChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Temperature (°C)',
                data: temps,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function displayError(message) {
    document.getElementById('error-message').textContent = message;
}

function clearError() {
    document.getElementById('error-message').textContent = '';
}

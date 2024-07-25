const apiKey = '720fd91230f247d0e1db3adc9b0b3acb'; // Replace with your OpenWeatherMap API key

function fetchWeatherByLocation() {
    const location = document.getElementById('location-input').value;
    if (location) {
        fetchWeather(location);
    } else {
        alert('Please enter a location.');
    }
}

function fetchWeather(location) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Debugging: Log the response data
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('Location not found. Please try another location.');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again later.');
        });
}

function displayWeather(data) {
    const weatherDisplay = document.getElementById('weather-display');
    const weatherInfo = `
        <p>Location: ${data.name}</p>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    weatherDisplay.innerHTML = weatherInfo;
}

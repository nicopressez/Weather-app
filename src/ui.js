export function showWeatherUI(currentWeather){
    const weatherContainer = document.getElementById("weatherInfo");

    const city = document.createElement("h2");
    const time = document.createElement("h4")
    const temperatureC = document.createElement("h4");
    const feelC = document.createElement("p");
    const condition = document.createElement("p");
    

    city.textContent = currentWeather.city;
    time.textContent = currentWeather.time.slice(-5);
    temperatureC.textContent = currentWeather.tempC + " °C";
    feelC.textContent = `Feels like ${currentWeather.feelC}°C`
    condition.textContent = currentWeather.condition;

    weatherContainer.appendChild(city);
    weatherContainer.appendChild(time);
    weatherContainer.appendChild(temperatureC);
    weatherContainer.appendChild(feelC);
    weatherContainer.appendChild(condition);
}
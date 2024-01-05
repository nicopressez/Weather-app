import { loadNewWeather } from "./index";
import { getWeather } from "./api";

export function showWeatherUI(currentWeather) {
  const weatherContainer = document.getElementById("weatherInfo");

  const currentWeatherInfo = document.createElement("section");
  const city = document.createElement("h2");
  const time = document.createElement("h4");
  const temperatureC = document.createElement("h4");
  const feelC = document.createElement("p");
  const condition = document.createElement("p");

  currentWeatherInfo.classList.add("currentWeatherInfo");
  currentWeatherInfo.setAttribute("id", "currentWeatherInfo");

  city.textContent = currentWeather.city;
  time.textContent = currentWeather.time.slice(-5);
  temperatureC.textContent = currentWeather.tempC + " °C";
  feelC.textContent = `Feels like ${currentWeather.feelC}°C`;
  condition.textContent = currentWeather.condition;

  weatherContainer.appendChild(currentWeatherInfo);
  currentWeatherInfo.appendChild(city);
  currentWeatherInfo.appendChild(time);
  currentWeatherInfo.appendChild(temperatureC);
  currentWeatherInfo.appendChild(feelC);
  currentWeatherInfo.appendChild(condition);
}

export async function resetWeatherUI() {
  try {
    const weatherContainer = document.getElementById("weatherInfo");
    const currentWeatherInfo = document.getElementById("currentWeatherInfo");
    weatherContainer.removeChild(currentWeatherInfo);
  } catch (error) {}
}

(function searchBar() {
  const searchBtn = document.getElementById("searchBtn");
  const searchBar = document.getElementById("newCity");

  searchBtn.addEventListener("click", () => {
    loadNewWeather(searchBar.value);
    searchBar.value = "";
  });
})();

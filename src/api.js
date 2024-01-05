import { WeatherInfo } from "./index";
import { showWeatherUI } from "./ui";

export async function getWeather(city){
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=658a6bb0cf0a448d93a102646240501&q=${city}&days=3&aqi=no&alerts=no`)
    .then(async function(response){
        try{
        const response_1 = await response.json();
    
        const currentWeather = new WeatherInfo (
            response_1.location.name, response_1.current.temp_c,
            response_1.current.feelslike_c, response_1.current.condition.text,
            response_1.location.localtime)

        showWeatherUI(currentWeather);
        }
        catch(error){
            alert(`Could not find the city of ${city}`);
        }
    })}
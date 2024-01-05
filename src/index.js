import { getWeather } from "./api";

export class WeatherInfo{
    constructor(city, tempC, feelC, condition, time){
        this.city = city;
        this.tempC = tempC
        this.feelC = feelC;
        this.condition = condition;
        this.time = time;
    }
}

getWeather("sydney");
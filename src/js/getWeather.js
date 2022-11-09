// function for getting weather data from weatherbit

import cityData from "./citiesLatLong.json"
import Sunny from "./images/sunny.png"
import Rainy from "./images/raining.png"
import Snow from "./images/snow.jpeg"
import Storm from "./images/storm.jpeg"

export default async function getWeather(value, key) {

    const weatherText = document.querySelector(".weather-text");
    const weatherImage = document.querySelector(".card-img-top");

    const response = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${cityData[value].latitude}6&lon=${cityData[value].longitude}&key=${key}&include=minutely`);
    const weatherData = await response.json();
    
    weatherText.textContent = `${cityData[value].name}, ${weatherData.data[0].weather.description}, ${weatherData.data[0].temp}°C`

    switch(parseInt(weatherData.data[0].weather.code)) {
        case 200: 
        case 201:
        case 202:
        case 230:
        case 231:
        case 232:
        case 233:
            weatherImage.src = Storm;
            break;
        case 300:
        case 301:
        case 302:
        case 500:
        case 501:
        case 502:
        case 511:
        case 520:
        case 521:
        case 522:
        case 700:
        case 711:
        case 721:
        case 731:
        case 741:
        case 751:
            weatherImage.src = Rainy;
            break;
        case 600: 
        case 601:
        case 602:
        case 610:
        case 611:
        case 612:
        case 621:
        case 622:
        case 623:
            weatherImage.src = Snow;
            break;
        case 800:
        case 801:
        case 802:
        case 803:
        case 804:
        case 900:
            weatherImage.src = Sunny;
            break;
    }

}
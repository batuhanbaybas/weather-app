const WeatherBody = ({weather}) => {
    return (
        <div className={"weather-card-body"}>
            <div className={"card-body-img"}>
                <img src={` http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                     alt={weather.weather[0].description}/>
                <span>{weather.weather[0].main}</span>
            </div>
            <div className={"weather-card-body-temprature"}>{Math.floor(weather.main?.temp_max)}°C</div>
            <div className={"weather-card-body-left"}>
                <p>Rüzgar Hızı: {Math.floor(weather.wind.speed / 0.10)} km/s</p>
                <p>Nem : {Math.floor(weather.main.humidity)} % </p>
                <p>Basınç : {Math.floor(weather.main.pressure)} mb</p>
            </div>

        </div>

    )
}

export default WeatherBody;
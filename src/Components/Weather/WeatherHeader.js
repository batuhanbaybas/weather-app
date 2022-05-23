const WeatherHeader = ({weather}) => {
    return (
        <div className={"weather-card-header"}>
            <h4 className={"city-name"}>{weather.name} / <span>{weather.sys.country}</span></h4>
        </div>
    )
}
export default WeatherHeader;
import {useSelector} from "react-redux";
import {selectStatus, selectWeather} from "../../Redux/features/weatherSlice";
import WeatherHeader from "./WeatherHeader";
import WeatherBody from "./WeatherBody";
import Empty from "./Empty";
import Loading from "../Loading/Loading";

const Weather = () => {
    const weather = useSelector(selectWeather);
    const loading = useSelector(selectStatus)

    if (loading === "pending") {
        return <Loading/>
    }


    return (
        <div className={"weather"}>
            {
                weather.sys !== undefined ?
                    <div className={"weather-card"}>
                        <WeatherHeader weather={weather}/>
                        <WeatherBody weather={weather}/>
                    </div>
                    :
                    <Empty/>
            }
        </div>

    )


}
export default Weather;
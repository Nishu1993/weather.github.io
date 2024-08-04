import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function WeatherApp () {
    const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24,
    temp: 25,
    tempMin: 25,
    tempMax: 26,
    humidity: 47,
    weather: "haze",
    }
);

let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
}
    return (
        <>
        <SearchBox updateInfo = {updateInfo} />
        <br></br>
        <InfoBox info = {weatherInfo}/>
        </>
    )
}
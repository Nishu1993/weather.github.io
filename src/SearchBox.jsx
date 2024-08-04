import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
export default function SearchBox({updateInfo}) {
    let[city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "8b5619d498dd0f40385342b70a97c135";

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        //console.log(jsonResponse);
        let result = {
          city: jsonResponse.name,
          temp: jsonResponse.main.temp,
          tempMin: jsonResponse.main.temp_min,
          tempMax: jsonResponse.main.temp_max,
          humidity: jsonResponse.main.humidity,
          feelsLike: jsonResponse.main.feels_like,
          weather: jsonResponse.weather[0].description
        };
        console.log(result);
        return result;
    }
    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handlesubmit = async (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    };
  return (
    <div>
      <h3>Search for the Weather</h3>
      <form onSubmit={handlesubmit}>
      <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
      <br/> <br/>
      <Button variant="contained" type="submit">Search</Button>
      </form>
    </div>
  );
}

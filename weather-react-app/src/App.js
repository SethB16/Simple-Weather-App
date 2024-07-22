import React, {useState} from "react";
import axios from "axios";



function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=b7c7460aa2e53dc22330ca6b0f332778`;

  const searchLocation = (event) => {
    if (event.key == 'Enter'){
      axios.get(url).then((response) =>{
        setData(response.data)
        console.log(response.data)
      })

      setLocation('')
    }
    
  }


  return (
    <div className="App">
      <div className="search">
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"/>
      </div>
      <div className="container">
      <div className="top">
        <div className="location">
        <p>{data.name}</p>
        </div>
        <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
        </div>
        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
      </div>
      <div className="bottom">
        <div className="feels">
          <h3>Feels Like</h3>
          {data.main ? <p>{data.main.feels_like.toFixed()}°F</p> : null}
        </div>
        <div className="humidity">
        <h3>Humidity</h3>
        {data.main ? <p>{data.main.humidity}%</p> : null}
        </div>
        <div className="wind">
        <h3>Wind</h3>
        {data.wind ? <p>{data.wind.speed} mph</p> : null}
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;

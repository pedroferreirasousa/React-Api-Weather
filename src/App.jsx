import { useState, useRef } from "react";
import "./App.css";
import axios from "axios";
import Weatherprimaryinfo from "./components/WeatherPrimaryInfo/Weatherprimaryinfo";

function App() {
  const [weather, setWeather] = useState();

  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const keyApi = "ec2298ffb621460504e7ff4d9b1afc2a";
    /*url da api com dados atuais */
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}&lang=pt_br&units=metric`;
    /* url da api  com dados para 5 dias */

    const apiInfoWeather = await axios.get(urlApi);
    setWeather(apiInfoWeather.data);
  }

  return (
    <div className="container">
      <h1>Condições Climáticas</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={searchCity}>Buscar</button>
      {weather && <Weatherprimaryinfo weather={weather} />}
    </div>
  );
}

export default App;
